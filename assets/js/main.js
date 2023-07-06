let container = document.querySelector(".carousel");
// Al cargar la página
window.addEventListener('load', function () { // Obtener los productos almacenados en localStorage
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
    <img src="${movie.img}" alt="" class="poster">
    <div class="name-price-trailer">
        <div class="nameAndPrice">
            <p class="name">${movie.name}</p>
            <p class="price">${movie.cost}</p>
        </div>
        <button class="playTrailer">
            <span class="playIcon"></span> 
        </button>
    </div>
    <table class="tablaMovie">
        <thead>
            <tr class="trMovie">
                <th class="thMovie">length</th>
                <th class="thMovie">rating</th>
                <th class="thMovie">genre</th>
            </tr>
        </thead>
        <tbody>
            <tr class="trMovie">
                <td class="tdMovie">${movie.time}</td>
                <td class="tdMovie">${movie.rating}</td>
                <td class="tdMovie">${movie.genre}</td>
            </tr>
        </tbody>
    </table>
    <button class="btnAgregarCarrito">Agregar al carrito</button>
</div>`;
}

function loadMovies(array) {
    container.innerHTML = "";
    array.forEach((movie) => {
        container.innerHTML += retornarCardHTML(movie);
    });
    activarClickEnBotones();
}
