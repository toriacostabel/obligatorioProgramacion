const movieList = document.getElementById("movieList");

let movies = [];
let genre = [];

// Función para cargar peliculas desde el HTML
function newData() { // Obtener los elementos "movie" dentro de la lista de peliculas
    const movieData = movieList.getElementsByClassName("movie");

    // Recorrer los elementos y extraer los datos
    for (let i = 0; i < movieData.length; i++) {
        const tmpMovie = movieData[i];
        const id = parseInt(tmpMovie.getAttribute("data-id"));
        const img = tmpMovie.getAttribute("data-img")
        const name = tmpMovie.getAttribute("data-name");
        const year = parseInt(tmpMovie.getAttribute("data-year"));
        const director = tmpMovie.getAttribute("data-director");

        // Crear el objeto persona y agregarlo al arreglo
        const movie = [id, name, year, genre, director];
        return movie;
    }
}

function newMovie() {

    newData();
}

function readMovie(id) {
    // Buscar la película por su id
    const movie = movies.find(movie => movie.id === id);

    // Retornar la película encontrada
    return movie;
}
function updateMovie() {
    const movie = movies.find(movie => movie.id === id);
    const movieData = movieList.getElementsByClassName("movie");

    for (let i = 0; i < movieData.length; i++) {
        const tmpMovie = array[i];
        if (movie == tmpMovie[0]) {
            newData();
            
        }
    }

}

function deleteMovie() { // Obtener los elementos "movie" dentro de la lista de peliculas
    const movieData = movieList.getElementsByTagName("movie");

    // Recorrer los elementos y extraer los datos
    for (let i = 0; i < movieData.length; i++) {
        const tmpMovie = movieData[i];
        const id = parseInt(tmpMovie.getAttribute("data-id"));
        const img = tmpMovie.getAttribute("data-img")
        const name = tmpMovie.getAttribute("data-name");
        const year = parseInt(tmpMovie.getAttribute("data-year"));
        const genre = tmpMovie.getAttribute("data-genre");
        const director = tmpMovie.getAttribute("data-director");

        // Crear el objeto persona y agregarlo al arreglo
        const movie = { id, name, year, genre, director: [] };
        movies.push(movie);
    }
}
function getGenre()
genre = tmpMovie.getAttribute("data-genre");
// Llamar a las funciones para cargar los datos desde el HTML
loadMovies();
