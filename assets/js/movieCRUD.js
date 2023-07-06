let container = document.querySelector(".carousel");

// Al cargar la página
window.addEventListener('load', function () {
  // Obtener los productos almacenados en localStorage
  let savedMovies = getMoviesFromLocalStorage();

  // Si hay    en el localStorage
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

// Creamos la card para cada producto con su imagen, nombre, precio y boton de eliminar y modificar.
function retornarCardHTML(movie) {
  return `<div class="movies">
    <div class="img"><img src='${movie.img
    }' class="poster"></div>
    <div class="movieInformation" id="movieInformation">
      <div class="name"><p class="infoP movieName">${movie.name
    }</p></div>
      <div class="time"><p class="infoP showOnHover">Duration: ${movie.time
    }</p></div>
      <div class="year"><p class="infoP showOnHover">${movie.year
    }</p></div>
      <div class="cost"><p class="infoP showOnHover">USD ${movie.cost
    }</p></div>
      <div class="genre"><p class="infoP showOnHover">Genre: ${movie.genre
    }</p></div>
      <div class="rating"><p class="infoP showOnHover">Rating: ${movie.rating
    }</p></div>
      <div class="director"><p class="infoP showOnHover">Director: ${movie.director
    }</p></div>
      <div class="buy"><button class="comprar showOnHover"id="${movie.id
    }">Modificar</button></div>
    </div>
  </div>`;
}

// Función para agregar una tarjeta por cada producto que tengamos en el array que le pasamos
function LoadMovies(array) {
  container.innerHTML = "";
  array.forEach((movie) => {
    container.innerHTML += retornarCardHTML(movie);
  });
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
  let tmpId = Math.floor(Math.random() * 900000 + 100000);
  // Carga los valores en el objeto movie
  let movie = {
    id: tmpId,
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
  let index = moviesStorage.findIndex((movie) => parseInt(movie.id) === id);

  if (index !== -1) {
    // Eliminar el movie del array
    moviesStorage.splice(index, 1);

    // Guardar los movies actualizados en el LocalStorage
    addMoviesAtLocalStorage(moviesStorage);

    // Recargar la lista de movies en la página
    loadMovies(moviesStorage);

    alert("Pelicula eliminada correctamente");
  } else {
    alert("No se encontró la pélícula");
  }
}