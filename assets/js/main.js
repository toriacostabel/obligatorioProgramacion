let container = document.querySelector(".carousel");
let dropdown = document.getElementById("users-List");

// Al cargar la página
window.addEventListener('load', function () {
  // Obtener las peliculas almacenadas en localStorage
  let savedMovies = getMoviesFromLocalStorage();

  // Si hay peliculas en el localStorage
  if (savedMovies.length > 0) {
    // Cargar peliculas en la página
    loadMovies(savedMovies)
  } else {
    // De lo contrario, guardar las peliculas que tenemos en variables.js en el localStorage
    setMoviesAtLocalStorage(movies)
    
    loadMovies(movies)
  }
});

loadUsers(users);

function getMoviesFromLocalStorage() {
  let moviesString = localStorage.getItem('movies');
  return moviesString ? JSON.parse(moviesString) : [];
}

let totalPurchasesFranco = document.getElementById(`${users[0].id}`);
let totalPurchasesRenata = document.getElementById(`${users[1].id}`);
let totalPurchasesIgnacio = document.getElementById(`${users[2].id}`);
let totalPurchase = 0;

function retornarCardHTML(movie) {
  return `<div class="movie">
    <div class="img"><img src='${movie.img
    }' class="poster"></div>
    <div class="movieInformation" id="movieInformation">
      <div class="name"><p class="infoP">${movie.name
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
    }">Comprar</button></div>
    </div>
  </div>`;
}

function retornarPersonaHTML(user) {
  return `<option value="${user.id}">${user.name}</option>`;
}

function activarClickEnBotones() {
  // Seleccionamos todos los botones de compra
  let buttons = document.querySelectorAll(".btn-compra");
  if (buttons !== null) {
    for (let button of buttons) {
      button.addEventListener("click", (e) => {
        // Encontramos la pelicula seleccionada
        let movie = movies.find(
          (movie) => movie.codigo === parseInt(e.target.id)
        );
        // Encontramos a la persona que está comprando
        let userSelected = dropdown.value;
          for (let user of users) {
          if (user.id == userSelected) {
            // Agregamos al carrito de la persona el producto
            user.movies.push(movie);
          }
        } 
        actualizarTotalProductos();
      });
    }
  }
}

function loadMovies(array) {
  container.innerHTML = "";
  array.forEach((movie) => {
    container.innerHTML += retornarCardHTML(movie);
  });
  activarClickEnBotones();
}

function loadUsers(array) {
  dropdown.innerHTML = "";
  array.forEach((user) => {
    dropdown.innerHTML += retornarPersonaHTML(user);
  });
}