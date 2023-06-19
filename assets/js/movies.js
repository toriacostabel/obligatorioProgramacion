// Obtiene los elementos de "movieForm" dentro de la lista de peliculas
const movieData = document.getElementById("movieForm");
// Obtiene los elementos de "movieGenres" dentro de la lista de peliculas
const genreList = document.getElementsById("movieGenres");
const movies = [];

// Función para cargar peliculas desde el HTML
function newData() {
    // Recorre los elementos y extrae los datos
    for (let i = 0; i < movieData.length; i++) {
        // Creo un objeto con todos los datos obetnidos en cada iteracion del array
        if (movieData.id === movies.id) {
            let mensaje = "ya existe";
        } else {
            const tmpMovie = movieData[i];
            const tmpId = tmpMovie.getElementById("id");
            const tmpImg = tmpMovie.getAttribute("data-img")
            const tmpName = tmpMovie.getAttribute("data-name");
            const tmpYear = tmpMovie.getAttribute("data-year");
            // Crea un array de géneros para luego agregarlos al Array movie
            const tmpGenres = [
                tmpMovie.getAttribute("data-genre1"),
                tmpMovie.getAttribute("data-genre2"),
                tmpMovie.getAttribute("data-genre3")
            ];
            const tmpDirector = tmpMovie.getAttribute("data-director");

            // Crea el objeto movie y carga los datos obtenidos
            const movie = {
                id: tmpId,
                img: tmpImg,
                name: tmpName,
                year: tmpYear,
                genres: tmpGenres,
                director: tmpDirector
            };
            return movie;
        }
    }
}

function newMovie() {
    movies.push(newData());
    // for (let i = 0; i < movies.length; i++) {
    //     const tmpMovie = array[i];
    //     if (newData()[0] != tmpMovie[0]) {           
    //     }
    // }
}

function readMovie() {
    const tmpId = document.getElementById("movieID").value;
    // Buscar la película por su id
    for (let i = 0; i < movies.length; i++) {
        tmpMovie = movies[i];
        if (tmpMovie.id === tmpId) {
            document.getElementById("movieName").textContent = tmpMovie.id;
            document.getElementById("movieName").textContent = tmpMovie.img;
            document.getElementById("movieName").textContent = tmpMovie.name;
            document.getElementById("movieYear").textContent = tmpMovie.year;
            document.getElementById("movieYear").textContent = tmpMovie.genres;
            document.getElementById("movieYear").textContent = tmpMovie.director;
            return;
        }
    }
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
