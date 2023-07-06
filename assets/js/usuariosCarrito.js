const usuarios = ['Andy', 'Victoria', 'Carlos', 'Andres'];
let carrito = {};

function agregarAlCarrito(movie, usuario) {
    if (!carrito[usuario]) {
      carrito[usuario] = [];
    }
    carrito[usuario].push(movie);
    console.log(`Película "${movie.name}" agregada al carrito de ${usuario}.`);
} 

const selectUsuario = document.getElementById('selectUsuario');

const opcionesUsuarios = usuarios
  .map((usuario, index) => `<option value="${index}">${usuario}</option>`)
  .join('');

selectUsuario.insertAdjacentHTML('beforeend', opcionesUsuarios);

// Cargar las películas y activar los clics en los botones al cargar la página
window.addEventListener('load', function () {
  const carousel = document.querySelector('.carousel');
  carousel.innerHTML = '';

  movies.forEach((movie) => {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie';
    movieCard.innerHTML = retornarCardHTML(movie);
    carousel.appendChild(movieCard);
  });

  activarClickEnBotones();
});

// Manejar el evento de clic en el botón "Agregar al carrito"
function activarClickEnBotones() {
  const btnAgregarCarrito = document.getElementsByClassName('btnAgregarCarrito');
  Array.from(btnAgregarCarrito).forEach((btn) => {
    btn.addEventListener('click', () => {
      const movieCard = btn.closest('.movie');
      const index = selectUsuario.value; // Obtener el índice del usuario seleccionado
      const movie = {
        name: movieCard.querySelector('.name').textContent,
        img: movieCard.querySelector('.poster').src,
        cost: parseFloat(movieCard.querySelector('.price').textContent),
        time: movieCard.querySelector('.tdMovie').textContent,
        rating: parseFloat(movieCard.querySelector('.tdMovie').textContent),
        genre: movieCard.querySelector('.tdMovie').textContent
      };
      agregarAlCarrito(movie, usuarios[index]);
    });
  });
}

activarClickEnBotones();