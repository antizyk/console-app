"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже смотрели?");
function ask() {

	for (let i = 0; i < 2; i++) {
		let movie = prompt('Один из последних просмотренных фильмов?');
		let apprasial = prompt('На сколько его оцените?');
		personalMovieDB.movies[`${movie}`] = apprasial;
	}
}

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: {},
	privat: false
}

ask();
console.log(personalMovieDB);