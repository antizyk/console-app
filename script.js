"use strict";


let personalMovieDB = {//Объект со всей информацией по фильмам
	count: null,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {//Запрос о количестве просмотренных фильмов за последнее время
		while (this.count == null || this.count === '' || this.count > 50 || isNaN(this.count)) {
			this.count = +prompt("Сколько фильмов вы уже смотрели?");
		}
	},
	detctPersonalLevel: function () {//Вывод уровня пользователя
		if (this.count < 10) {
			alert('Просмотренно довольно мало фильмов');
		} else if (this.count >= 10 && this.count < 30) {
			alert('Вы класический зритель');
		} else if (this.count >= 30) {
			alert('Вы киноман');
		}
		else {
			alert('Произошла ошибка');
		}
	},
	ask: function () {//Функция запрашивающая информацию о фильмах
		for (let i = 0; i < this.count; i++) {//Цикл зависящий от кол-ва просмотренных фильмов за последнее время
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
	},
	showMyDB: function () {
		if (this.privat === false) {
			console.log(personalMovieDB);
		}
	},

	writeYourGeners: function () {
		let answer;
		for (let i = 0; i < 3; i++) {
			answer = prompt(`Ваш любимый жанр под номером ${i + 1}?`);
			if (answer === '' || answer === null) {
				i--;
			}
			this.genres.push(answer);
		}
		this.genres.forEach(function (value, index, arr) {
			console.log(`Любимый жанр ${index + 1} - это ${value}`);
		});
	},
	toggleVisibleMyDB: function () {
		if (this.privat === false) {
			this.privat = true;
		} else {
			this.privat = false;
		}
	}
};
personalMovieDB.start();
personalMovieDB.ask();
personalMovieDB.writeYourGeners();
personalMovieDB.detctPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();

