let moviesCart = [];

let movie = {
    id: 0,
    name: "",
    time: 0,
    year: 0,
    cost: 0,
    genre: "",
    rating: "",
    director: ""
}

let movies = [
    { id: 1, name: "Scream", time: 123, year: 2023, cost: 150, genre: "Slasher", rating: 4, director: "Tyler Gillet", img: "../assets/img/scream.jpg" },
    { id: 2, name: "Barbie", time: 114, year: 2023, cost: 200, genre: "Comedy", rating: 4.5, director: "Greta Gerwig", img: "../assets/img/barbie.jpg" },
    { id: 3, name: "Dead Poets Society", time: 128, year: 1989, cost: 100, genre: "Drama", rating: 5, director: "Peter Weir", img: "../assets/img/deadPoetsSociety.jpg" },
    { id: 4, name: "Bicentennial Man", time: 132, year: 1999, cost: 100, genre: "Drama", rating: 5, director: "Chris Columbus", img: "../assets/img/bicentennialMan.jpg" },
    { id: 5, name: "Jaws", time: 124, year: 1975, cost: 50, genre: "Thriller", rating: 3.5, director: "Steven Spielberg", img: "../assets/img/jaws.jpg" },
    { id: 6, name: "Transformers", time: 144, year: 2007, cost: 500, genre: "Action", rating: 4.5, director: "Michael Bay", img: "../assets/img/transformers.jpg" }
];

let users = [
    { id: 0, name: "Fernanda", movies: [] },
    { id: 1, name: "Franco", movies: [] },
    { id: 2, name: "Martin", movies: [] },
];