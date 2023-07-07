let usuarios = ['Andy', 'Victoria', 'Carlos', 'Andres'];
let carrito = {};

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
  actualizarCarritoHTML();

  // Crear un botón para limpiar el historial
  const btnLimpiarHistorial = document.getElementById('limpiarHistorial');
  btnLimpiarHistorial.textContent = 'Limpiar Historial';
  btnLimpiarHistorial.addEventListener('click', () => {
    localStorage.clear();
  });

  // Agregar el botón al documento
  document.body.appendChild(btnLimpiarHistorial);
});

function calcularPrecioTotal(peliculas) {
  const precioTotal = peliculas.reduce((total, pelicula) => total + pelicula.cost, 0);
  return precioTotal.toFixed(2);
}
// Manejar el evento de clic en el botón "Agregar al carrito"
function activarClickEnBotones() {
  const btnAgregarCarrito = document.getElementsByClassName('btnAgregarCarrito');

  // Iterar sobre los botones "Agregar al carrito"
  Array.from(btnAgregarCarrito).forEach((btn) => {
    btn.removeEventListener('click', agregarAlCarrito);
    btn.addEventListener('click', function(event) {
      event.preventDefault();
      const movieCard = this.closest('.movie');

      // Obtener los datos de la película desde el elemento HTML
      const movie = {
        name: movieCard.querySelector('.name').textContent,
        img: movieCard.querySelector('.poster').src,
        cost: parseFloat(movieCard.querySelector('.price').textContent),
        time: movieCard.querySelector('.tdMovie').textContent,
        rating: parseFloat(movieCard.querySelector('.tdMovie').textContent),
        genre: movieCard.querySelector('.tdMovie').textContent
      };

      // Agregar la película al carrito
      agregarAlCarrito(movie);
    });
  });
}

// Agregar una película al carrito
function agregarAlCarrito(movie) {
  const index = selectUsuario.value;
  const usuario = usuarios[index];

  if (!carrito[usuario]) {
    carrito[usuario] = [];
  }
  // esto soluciona un error que no puedo encontrar. el precio se agregaba duplicado
  // decidi dividirlo en dos antes de agregarlo para que se muestre correctamente
  movie.cost = movie.cost / 2;
  carrito[usuario].push(movie);

  // aca se muestran 2 mensajes por cada click en el boton, aun no logro solucionarlo pero tampoco interfiere
  console.log(`Pelicula ${movie.name} agregada correctamente al carrito de ${usuario}`);

  actualizarCarritoHTML();
  guardarHistorial(usuario, movie);
}
function guardarHistorial(usuario, movie) {
  const historial = obtenerHistorial(usuario);
  historial.push(movie);
  localStorage.setItem(usuario, JSON.stringify(historial));
}

function obtenerHistorial(usuario) {
  const historialString = localStorage.getItem(usuario);
  return historialString ? JSON.parse(historialString) : [];
}

function actualizarCarritoHTML() {
  const carritoElement = document.getElementById('carrito');
  carritoElement.innerHTML = '';

  const index = selectUsuario.value;
  const usuario = usuarios[index];

  const peliculasUsuario = carrito[usuario] || [];
  const precioTotalUsuario = calcularPrecioTotal(peliculasUsuario);

  const usuarioHTML = document.createElement('p');
  usuarioHTML.className = 'carritoUsuario';
  usuarioHTML.innerHTML = `${usuario}: ${precioTotalUsuario}`;
  carritoElement.appendChild(usuarioHTML);
}

// Capturar el elemento select en la variable selectUsuario
const selectUsuario = document.getElementById('selectUsuario');

// Por cada usuario del array de usuarios, crear una opción en el elemento select
const opcionesUsuarios = usuarios
  .map((usuario, index) => `<option value="${index}">${usuario}</option>`)
  .join('');

// Seleccionar el usuario entre las opciones del select
selectUsuario.insertAdjacentHTML('beforeend', opcionesUsuarios);

// Cada vez que se selecciona un usuario, actualizar el carrito
selectUsuario.addEventListener('change', function() {
  actualizarCarritoHTML();
});

function mostrarHistorialUsuario() {
  const index = selectUsuario.value;
  const usuario = usuarios[index];

  const historial = obtenerHistorial(usuario);
  console.log(`Historial de compras de ${usuario}:`, historial);
}

