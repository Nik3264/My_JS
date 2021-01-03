/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
/*
const reklama=document.getElementsByClassName('promo__adv'),
    genre=document.getElementsByClassName('promo__genre'),
    mainFilmBg=document.getElementsByClassName('promo__bg'),
    listFilm=document.querySelector('.promo__interactive-list');

reklama[0].remove();
genre[0].textContent='Драма';
mainFilmBg[0].style.backgroundImage='url("img/bg.jpg")';

listFilm.innerHTML='';
*/

document.addEventListener('DOMContentLoaded', ()=>{

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv=document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        
        addForm=document.querySelector('form.add'),
        addInput=addForm.querySelector('.adding__input'),
        checkbox=addForm.querySelector('[type="checkbox"]'); 

    addForm.addEventListener('submit', (event)=> {
        //отслеживаем отправку нашей формы - событие submit
        event.preventDefault();//отменили стандартное поведение - перезагрузку стриницы

        let newFilm=addInput.value;
        const favorite=checkbox.checked;
//проверяем, не пустая ли строка
        if(newFilm){

            if(newFilm.length>21){
                newFilm=`${newFilm.substring(0,22)}...`;
            }

            if(favorite){

            }
            
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();

    });

    const deleteAdv=(arr)=>{
        arr.forEach(item=>{
        item.remove();
    }); 
    };

    

    
    const makeChanges=()=>{
        genre.textContent='драма';
        poster.style.backgroundImage='url("img/bg.jpg")';

    };

    

    movieList.innerHTML="";

    const sortArr=(arr)=>{
        arr.sort();
    };

    

    movieDB.movies.forEach((item,i)=>{
        movieList.innerHTML+=`<li class="promo__interactive-item">${i+1}. ${item}
        <div class="delete"></div>
        </li>`;
    });
    
    movieDB.movies.sort();
    
    function createMovieList(films, parent){
        parent.innerHTML="";
        sortArr(films); 
        films.forEach((item,i)=>{
            parent.innerHTML+=`<li class="promo__interactive-item">${i+1}. ${item}
            <div class="delete"></div>
            </li>`;
        });

        document.querySelectorAll('.delete').forEach((btn,i)=>{
            btn.addEventListener('click', ()=>{
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }

    deleteAdv(adv);
    makeChanges();
    
    createMovieList(movieDB.movies, movieList);

});
