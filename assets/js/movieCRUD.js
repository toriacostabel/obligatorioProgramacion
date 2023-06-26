// Obtiene los elementos de "movieForm" dentro de la lista de peliculas
let movieData = document.getElementById(".movieForm");
let movies = [];

// Crea el objeto movie y carga los datos obtenidos
function movieStrcture() {
    let movie = {
        id: tmpId,
        img: tmpImg,
        name: tmpName,
        year: tmpYear,
        cost: tmpCost,
        genre1: tmpGenre1,
        genre2: tmpGenre2,
        genre3: tmpGenre3,
        rate: tmpRate,
        director: tmpDirector
    };
}
// Función para cargar peliculas desde el HTML
function newData() {
    // Recorre los elementos y extrae los datos
    for (let i = 0; i < movieData.length; i++) {
        // Creo un objeto con todos los datos obtenidos en cada iteracion del array
        let tmpMovie = movieData[i];
        let tmpId = tmpMovie.getElementById("id");
        let tmpImg = tmpMovie.getElementById("img")
        let tmpName = tmpMovie.getElementById("name");
        let tmpYear = tmpMovie.getElementById("year");
        let tmpCost = tmpMovie.getElementById("price");
        let tmpGenre1 = tmpMovie.getElementById("genre1");
        let tmpGenre2 = tmpMovie.getElementById("genre2");
        let tmpGenre3 = tmpMovie.getElementById("genre3");
        let tmpRate = tmpMovie.getElementById("rate");
        let tmpDirector = tmpMovie.getElementById("director");
        return movieStrcture();
    }
}
// Función para dar alta de película
function newMovie() {
    for (let i = 0; i < movies.length; i++) {
        let tmpMovie = array[i];
        if (newData()[0] != tmpMovie[0]) {
            movies.push(newData());
        }
    }
}
// Función para leer y mostrar película
function readMovie() {
    let tmpId = document.getElementById("movieID");
    // Buscar la película por su id
    for (let i = 0; i < movies.length; i++) {
        tmpMovie = movies[i];
        if (tmpMovie[i][0] === tmpId) {
            return
            `<div class="div-movieCard">
                <div class="id"><p>${tmpMovie.id}</p></div>
                <div class="imagen"><img src='${tmpMovie.img}'></img></div>
                <div class="name"><p>${tmpMovie.name}</p></div>
                <div class="year"><p>${tmpMovie.year}</p></div>
                <div class="cost"><p>${tmpMovie.cost}</p></div>
                <div class="genre1"><p>${tmpMovie.genre1}</p></div>
                <div class="genre2"><p>${tmpMovie.genre2}</p></div>
                <div class="genre3"><p>${tmpMovie.genre3}</p></div>
                <div class="rate"><p>${tmpMovie.rate}</p></div>
                <div class="director"><p>${tmpMovie.director}</p></div>
            </div>`
                ;
        }
    }
}
// Función para actualizar película
function updateMovie() {
    let movie = movies.find(movie => movie.id === id);
    let movieData = movieList.getElementsByClassName("movie");

    for (let i = 0; i < movieData.length; i++) {
        const tmpMovie = array[i];
        if (movie == tmpMovie[0]) {
            newData();

        }
    }

}
function deleteMovie() {
}
function allowDrop(event) {
    event.preventDefault();
}

function handleDrop(event) {
    event.preventDefault();

    var file = event.dataTransfer.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
        var imageInfo = document.getElementById("imageInfo");
        imageInfo.innerText = "Imagen ingresada: " + file.name;
        document.getElementById("urlInput").value = "";
    };

    reader.readAsDataURL(file);
}

function handleInputChange() {
    var urlInput = document.getElementById("urlInput");
    var imageInfo = document.getElementById("imageInfo");

    if (urlInput.value) {
        imageInfo.innerText = "Imagen ingresada: " + urlInput.value;
    } else {
        imageInfo.innerText = "";
    }
}
