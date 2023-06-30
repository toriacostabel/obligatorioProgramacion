let container = document.querySelector(".carousel");

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

const previewContainer = document.querySelector("#newMoviePreview");

// Escuchar el evento "input" en cada campo del formulario
const formInputs = document.querySelectorAll(".newMovieInput");
formInputs.forEach((input) => {
  input.addEventListener("input", updatePreview);
});

function updatePreview() {
  // Obtener los valores de los campos del formulario
  const name = document.querySelector("#movieName").value;
  const time = document.querySelector("#movieTime").value;
  const year = document.querySelector("#movieYear").value;
  const cost = document.querySelector("#movieCost").value;
  const genre = document.querySelector("#movieGenre").value;
  const rating = parseFloat(document.querySelector("#movieRating").value);
  const director = document.querySelector("#movieDirector").value;
  const img = document.querySelector("#movieImg").value;

  // Crear el HTML de la vista previa con los datos obtenidos
  const previewHTML = `
    <div class="MoviePreview">
      <div class="img"><img src="${img}"></div>
      <div class="name"><p>${name}</p></div>
      <div class="time"><p>${time}</p></div>
      <div class="year"><p>${year}</p></div>
      <div class="cost"><p>${cost}</p></div>
      <div class="genre"><p>${genre}</p></div>
      <div class="rating"><p>${rating}</p></div>
      <div class="director"><p>${director}</p></div>
    </div>
  `;

  // Actualizar el contenido del contenedor de vista previa con el HTML generado
  previewContainer.innerHTML = previewHTML;
}