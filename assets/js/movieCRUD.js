let container = document.querySelector(".carousel");
let movieContainer = document.querySelector(".newMoviePreview");

// Al cargar la página
window.addEventListener('load', function () {
  // Obtener los productos almacenados en localStorage
  let savedMovies = getMoviesFromLocalStorage();
  // Si hay productos en el localStorage
  if (savedMovies.length > 0) {
    // Cargar los productos en la página
    loadMovies(savedMovies)
  } else {
    // De lo contrario, guardar los productos que tenemos en variables.js en el localStorage
    setMoviesAtLocalStorage(movies)
    // Cargar los productos en la página
    loadMovies(movies)
  }
});

// Convierte ruta de la imagen ya que la misma al ser obtenida desde el index, apunta desde la ubicación del
// mismo.
function convertirRuta(ruta) {
  if (ruta.startsWith("./")) {
    ruta = "./../" + ruta.substring(2);
  }
  return ruta;
}

<<<<<<< HEAD
=======
function retornarCardHTML(movie) {
  return `<div class="movie">
    <div class="img"><img class="poster" src='${movie.img}'></div>
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
}

>>>>>>> a8d0764b092a73f7e44fd7b5428f4d42445b3bbf
// Función para dar alta de película
function setMoviesAtLocalStorage(movies) {
  // Guardar los datos en el Local Storage
  localStorage.setItem('movies', JSON.stringify(movies));
}

document.querySelector("#newMovieForm").addEventListener("submit", (e) => {
  e.preventDefault();
  //Obtener los valores del form
  let name = document.querySelector("#movieName").value;
  let time = document.querySelector("#movieTime").value;
  let year = document.querySelector("#movieYear").value;
  let cost = document.querySelector("#movieCost").value;
  let genre = document.querySelector("#movieGenre").value;
  let rating = parseFloat(document.querySelector("#movieRating").value);
  let director = document.querySelector("#movieDirector").value;
  let img = document.querySelector("#movieImg").value;

  function getMoviesFromLocalStorage() {
    let moviesString = localStorage.getItem('movies');
    return moviesString ? JSON.parse(moviesString) : [];
  }

  let moviesStorage = getMoviesFromLocalStorage();
  let tmpId = moviesStorage.length > 0 ? moviesStorage.length : movies.length;
  // Crear un nuevo objeto movie
  let movie = {
    id: tmpId + 1,
    name: name,
    time: time,
    year: year,
    cost: cost,
    genre: genre,
    rating: rating,
    director: director,
    img: "../assets/img/" + img.slice(12)
  };
  // Agregar la nueva pelicula al array
  if (moviesStorage.length <= 0) {
    movies.push(movie);
    setMoviesAtLocalStorage(movies);
  } else {
    moviesStorage.push(movie);
    setMoviesAtLocalStorage(moviesStorage);
  }
  alert("Película agregada correctamente");
  loadMovies(moviesStorage);
});

function getMoviesFromLocalStorage() {
  let moviesString = localStorage.getItem('movies');
  return moviesString ? JSON.parse(moviesString) : [];
}

function deleteMovie(id) {
  let moviesStorage = getMoviesFromLocalStorage();

  // Buscar el índice del movie en el array
  let indice = moviesStorage.findIndex((movie) => parseInt(movie.codigo) === id);

  if (indice !== -1) {
    // Eliminar el movie del array
    moviesStorage.splice(indice, 1);

    // Guardar los movies actualizados en el LocalStorage
    setMoviesAtLocalStorage(moviesStorage);

    // Recargar la lista de movies en la página
    loadMovies(moviesStorage);

    alert("Pelicula eliminada correctamente");
  } else {
    alert("No se encontró la pélícula");
  }
}

function retornarMoviePreview(movie) {
  return `<div class="MoviePreview">
    <div class="img"><img src='${movie.img}'></div>
    <div class="name"><p>${movie.name}</p></div>
    <div class="time"><p>${movie.time}</p></div>
    <div class="year"><p>${movie.year}</p></div>
    <div class="cost"><p>${movie.cost}</p></div>
    <div class="genre"><p>${movie.genre}</p></div>
    <div class="rating"><p>${movie.rating}</p></div>
    <div class="director"><p>${movie.director}</p></div>
            </div>`;
}

function loadMovie(array) {
  movieContainer.innerHTML = "";
  array.forEach((movie) => {
    movieContainer.innerHTML += retornarMoviePreview(movie);
  });
}

loadMovie()