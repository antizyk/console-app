"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже смотрели?");
let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: {},
	privat: false
}