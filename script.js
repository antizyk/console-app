"use strict";


let numberOfFilms;


//TODOO===========Создание функций==============================================
function start() {//Запрос о количестве просмотренных фильмов за последнее время
	while (numberOfFilms == null || numberOfFilms === '' || numberOfFilms > 50 || isNaN(numberOfFilms)) {
		numberOfFilms = prompt("Сколько фильмов вы уже смотрели?");
	}
	return numberOfFilms;
}
function detctPersonalLevel() {//Вывод уровня пользователя
	if (personalMovieDB.count < 10) {
		alert('Просмотренно довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		alert('Вы класический зритель');
	} else if (personalMovieDB.count >= 30) {
		alert('Вы киноман');
	}
	else {
		alert('Произошла ошибка');
	}
}
function ask() {//Функция запрашивающая информацию о фильмах
	for (let i = 0; i < numberOfFilms; i++) {//Цикл зависящий от кол-ва просмотренных фильмов за последнее время
		let movie = prompt('Один из последних просмотренных фильмов?');//Запрос о названии фильма
		let apprasial = prompt('На сколько его оцените?');//Запрос об оценку этого фильма
		if (movie != null && apprasial != null && movie != '' && apprasial != '' && movie.length < 50) {
			personalMovieDB.movies[`${movie}`] = apprasial;//Создание объекта в объекте для размещения информации
			console.log('Done');
		} else {
			console.log('Error');
			i--;
		}
	}
}

function showMyDB() {
	if (personalMovieDB.privat === false) {
		console.log(personalMovieDB);
	}
}
//TODOO=================================================================================


start();
let personalMovieDB = {//Объект со всей информацией по фильмам
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: {},
	privat: false
}

ask();
detctPersonalLevel();
showMyDB();


console.log(personalMovieDB);//Вывод результата работы кода в консоль для проверке