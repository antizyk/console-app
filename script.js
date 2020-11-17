"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже смотрели?");//Запрос о количестве просмотренных фильмов за последнее время
function ask() {//Функция запрашивающая информацию о фильмах
	for (let i = 0; i < +numberOfFilms; i++) {//Цикл зависящий от кол-ва просмотренных фильмов за последнее время
		let movie = prompt('Один из последних просмотренных фильмов?');//Запрос о названии фильма
		let apprasial = prompt('На сколько его оцените?');//Запрос об оценку этого фильма
		personalMovieDB.movies[`${movie}`] = apprasial;//Создание объекта в объекте для размещения информации
	}
}

let personalMovieDB = {//Объект со всей информацией по фильмам
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: {},
	privat: false
}

ask();//Вызов функции
console.log(personalMovieDB);//Вывод результата работы кода в консоль для проверке