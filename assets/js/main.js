//Al cargar la página
window.addEventListener('load', function() {
    // Obtener los productos almacenados en localStorage
    let savedMovies = getMoviesFromLocalStorage();
    // Cargar los productos en la página
    savedMovies.length > 0 ? loadMovies(savedMovies) : loadMovies(movies);
  });

  function getMoviesFromLocalStorage() {
    let moviesString = localStorage.getItem('productos');
    return moviesString ? JSON.parse(moviesString) : [];
  }

  let movies = [
    { img: "../assets/img/", codigo: 1, tipo: "Cheetos bag bones", precio: 150 },
    { img: "./images/cheetos-torciditos.png", codigo: 2, tipo: "Cheetos torciditos", precio: 200 },
    { img: "./images/coca-cola-chica.png", codigo: 3, tipo: "Coca Cola chica", precio: 60 },
    { img: "./images/coca-cola-lata.png", codigo: 4, tipo: "Coca Cola lata", precio: 80 },
    { img: "./images/coca-cola-litro.png", codigo: 5, tipo: "Coca Cola litro", precio: 110 },
  ];