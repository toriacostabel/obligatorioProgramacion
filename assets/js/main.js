let container = document.querySelector(".container");
let compras = document.querySelector(".cart");
let dropdown = document.getElementById("users-List");

// Compras totales
let totalPurchasesFernanda = document.getElementById(`${users[0].id}`);
let totalPurchasesFranco = document.getElementById(`${users[1].id}`);
let totalPurchasesMartin = document.getElementById(`${users[2].id}`);
let totalPurchase = 0;

loadUsers(users);
loadCarts(users);

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

function returnUserHTML(user) {
  return `<option value="${user.id}">${user.name}</option>`;
}
function returnCartsHTML(user) {
  return `<p>${user.name}:<span id="${user.id}">${user.movies.length}</span></p>`;
}

function activarClickEnBotones() {
  // Seleccionamos todos los botones de compra
  let botones = document.querySelectorAll(".btn-compra");
  if (botones !== null) {
    for (let boton of botones) {
      boton.addEventListener("click", (e) => {
        // Encontramos el producto seleccionado
        let producto = productos.find(
          (producto) => producto.codigo === parseInt(e.target.id)
        );
        // Encontramos a la persona que está comprando
        let personaSeleccionada = dropdown.value;
        for (let persona of personas) {
          if (persona.id == personaSeleccionada) {
            // Agregamos al carrito de la persona el producto
            persona.productos.push(producto);
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
    dropdown.innerHTML += returnUserHTML(user);
  });
}

function loadCarts(array) {
  compras.innerHTML = "";
  array.forEach((user) => {
    compras.innerHTML += returnCartsHTML(user);
  });
}

// Actualizamos el total de productos al carrito
function updateTotalPurchases() {
    totalPurchasesFernanda.textContent = users[0].movies.length;
    totalPurchasesFranco.textContent = users[1].movies.length;
    totalPurchasesMartin.textContent = users[2].movies.length;
} 
