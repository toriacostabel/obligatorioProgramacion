let container = document.querySelector(".carousel");

//Al cargar la página
window.addEventListener('load', function () {
  // Obtener las peliculas almacenadas en localStorage
  let savedMovies = obtainMoviesFromLocalStorage();
  // Cargar las peliculas en la página
  savedMovies.length > 0 ? loadMovies(savedMovies) : loadMovies(movies);
});

// Convierte ruta de la imagen ya que la misma al ser obtenida desde el index, apunta desde la ubicación del
// mismo.
function convertirRuta(ruta) {
  if (ruta.startsWith("./")) {
    ruta = "./../" + ruta.substring(2);
  }
  return ruta;
}

function loadMovies(array) {
  container.innerHTML = "";
  array.forEach((movie) => {
    container.innerHTML += retornarCardHTML(movie);
  });
}

// Función para dar alta de película
function newMovie(movies) {
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
  let rating = document.querySelector("#movieRating").value;
  let director = document.querySelector("#movieDirector").value;
  let img = document.querySelector("#movieImg");

  function obtainMoviesFromLocalStorage() {
    let moviesString = localStorage.getItem('movies');
    return moviesString ? JSON.parse(moviesString) : [];
  }

  let moviesStorage = obtainMoviesFromLocalStorage();
  let tmpId = moviesStorage.length > 0 ? moviesStorage.length : movies.length;
  // Crear un nuevo objeto movie
  let movie = {
    id: tmpId + 1,
    name: name,
    time: time,
    year: year,
    cost: cost,
    genre1: genre,
    rating: rating,
    director: director,
    img: "./img/" + img.slice(12)
  };
  // Agregar la nueva pelicula al array
  if (moviesStorage.length <= 0) {
    movies.push(movie);
    addMoviesAtLocalStorage(movies);
  } else {
    moviesStorage.push(movie);
    addMoviesAtLocalStorage(moviesStorage);
  }
  alert("Película agregada correctamente");
  loadMovies(moviesStorage);
});