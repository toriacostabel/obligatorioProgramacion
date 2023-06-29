let container = document.querySelector(".carousel");
//Al cargar la página
window.addEventListener('load', function () {
  // Obtener los productos almacenados en localStorage
  let savedMovies = getMoviesFromLocalStorage();
  // Cargar los productos en la página
  savedMovies.length > 0 ? loadMovies(savedMovies) : loadMovies(movies);
});

function getMoviesFromLocalStorage() {
  let moviesString = localStorage.getItem('productos');
  return moviesString ? JSON.parse(moviesString) : [];
}

function retornarCardHTML(movie) {
  return `<div class="movie">
    <div class="img"><img src='${movie.img}' class="movies"></div>
    <div class="name"><p>${movie.name}</p></div>
    <div class="time"><p>${movie.time}</p></div>
    <div class="year"><p>${movie.year}</p></div>
    <div class="cost"><p>${movie.cost}</p></div>
    <div class="genre"><p>${movie.genre}</p></div>
    <div class="rating"><p>${movie.rating}</p></div>
    <div class="director"><p>${movie.director}</p></div>
    <div class="buy"><button id="${movie.id}">Comprar</button></div>
            </div>`;
}

function loadMovies(array) {
  container.innerHTML = "";
  array.forEach((movie) => {
    container.innerHTML += retornarCardHTML(movie);
  });
  activarClickEnBotones();
}