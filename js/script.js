/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const reklama=document.getElementsByClassName('promo__adv'),
    genre=document.getElementsByClassName('promo__genre'),
    mainFilmBg=document.getElementsByClassName('promo__bg'),
    listFilm=document.querySelector('.promo__interactive-list');

reklama[0].remove();
genre[0].textContent='Драма';
mainFilmBg[0].style.backgroundImage='url("img/bg.jpg")';

listFilm.innerHTML='';


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


movieDB.movies.sort();

movieDB.movies.forEach((item,i)=>{
    listFilm.innerHTML+=`<li class="promo__interactive-item">${i}. ${item}
    <div class="delete"></div>
    </li>`;
});