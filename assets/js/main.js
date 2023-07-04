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
    <div class="img"><img src='${movie.img}' class="poster"></div>
    <div class="movieInformation" id="movieInformation">
      <div class="name"><p class="infoP">${movie.name}</p></div>
      <div class="time"><p class="infoP">Duration: ${movie.time}</p></div>
      <div class="year"><p class="infoP">${movie.year}</p></div>
      <div class="cost"><p class="infoP">USD ${movie.cost}</p></div>
      <div class="genre"><p class="infoP">Genre: ${movie.genre}</p></div>
      <div class="rating"><p class="infoP">Rating: ${movie.rating}</p></div>
      <div class="director"><p class="infoP">Director: ${movie.director}</p></div>
      <div class="buy"><button class="comprar"id="${movie.id}">Comprar</button></div>
    </div>
  </div>`;
}

function loadMovies(array) {
  container.innerHTML = "";
  array.forEach((movie) => {
    container.innerHTML += retornarCardHTML(movie);
  });
  activarClickEnBotones();
}