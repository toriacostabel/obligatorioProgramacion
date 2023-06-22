// Obtiene los elementos de "movieForm" dentro de la lista de peliculas
const movieData = document.querySelectorAll(".movieForm");
// Obtiene los elementos de "movieGenres" dentro de la lista de peliculas
const genreList = document.querySelectorAll(".movieGenres");
const movies = [];

// Función para cargar peliculas desde el HTML
function newData() {
    // Recorre los elementos y extrae los datos
    for (let i = 0; i < movieData.length; i++) {
        // Creo un objeto con todos los datos obetnidos en cada iteracion del array
        if (movieData[i].id != movies[i].id) {
            const tmpId = movieData[i].querySelector("#id").value;
            const tmpImg = movieData[i].querySelector("#img").value;
            const tmpName = movieData[i].querySelector("#name").value;
            const tmpYear = movieData[i].querySelector("#year").value;
            const tmpGenre1 = movieData[i].querySelector("#genre1").value;
            const tmpGenre2 = movieData[i].querySelector("#genre2").value;
            const tmpGenre3 = movieData[i].querySelector("#genre3").value;
            const tmpDirector = movieData[i].querySelector("#director").value;
            const tmpPrice = movieData[i].querySelector("#price").value;

            // Crea el objeto movie y carga los datos obtenidos
            const movie = {
                id: tmpId,
                img: tmpImg,
                name: tmpName,
                year: tmpYear,
                genre1: tmpGenre1,
                genre2: tmpGenre2,
                genre3: tmpGenre3,
                director: tmpDirector,
                precio: tmpPrice
            };
            return movie;
        } else {
            let mensaje = "La película ingresada ya existe";
            break;
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
        let tmpMovies = movies;
        if (tmpMovies[i].id === tmpId) {
            document.getElementById("id").textContent = tmpMovies[i].id;
            document.getElementById("img").textContent = tmpMovies[i].img;
            document.getElementById("name").textContent = tmpMovies[i].name;
            document.getElementById("year").textContent = tmpMovies[i].year;
            document.getElementById("genres").textContent = tmpMovies[i].genres;
            document.getElementById("director").textContent = tmpMovies[i].director;
            document.getElementById("price").textContent = tmpMovies[i].price;
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

}
function getGenre()
genre = tmpMovie.getAttribute("genre");
// Llamar a las funciones para cargar los datos desde el HTML