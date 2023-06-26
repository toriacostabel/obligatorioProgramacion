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

    return movie;
}

// Función para cargar películas desde el HTML
function newData() {
    let movieData = [];

    // Recorre los elementos y extrae los datos
    let tmpId = document.getElementById(movieID);
    let tmpImg = document.getElementById(movieUrl);
    let tmpName = document.getElementById(movieName);
    let tmpYear = document.getElementById(movieYear);
    let tmpCost = document.getElementById(movieCost);
    let tmpGenre1 = document.getElementById(movieGenre1);
    let tmpGenre2 = document.getElementById(movieGenre2);
    let tmpGenre3 = document.getElementById(movieGenre3);
    let tmpRate = document.getElementById(rate);
    let tmpDirector = document.getElementById(movieDirector);

    let movie = movieStructure(
        tmpId,
        tmpImg,
        tmpName,
        tmpYear,
        tmpCost,
        tmpGenre1,
        tmpGenre2,
        tmpGenre3,
        tmpRate,
        tmpDirector
    );
    return movies; // Devuelve el array de películas
}

// Función para dar alta de película
function newMovie() {
    // Guardar los datos en el Local Storage
    localStorage.setItem('movies', JSON.stringify(movies));
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
