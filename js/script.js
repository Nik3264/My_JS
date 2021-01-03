/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const btns=document.querySelectorAll('button'),
      wrapper=document.querySelector('.btn-block');

//console.log(btns[0].classList.length);

//console.log(btns[0].classList.item(1));
//console.log(btns[1].classList.add('red'));
//console.log(btns[0].classList.remove('blue'));
//console.log(btns[0].classList.toggle('blue'));

//f (btns[1].classList.contains('red')){
//   console.log('red');
//
btns[0].addEventListener('click',()=>{
    //if(!btns[1].classList.contains('red')){
        //btns[1].classList.add('red');
    //}else{
        //btns[1].classList.remove('red');
    //}
    btns[1].classList.toggle('red');//но это не всегда работает, иногда надо через if
});

//console.log(btns[0].className);
wrapper.addEventListener('click', (event)=>{
 //console.dir(event.target);
 if(event.target && event.target.tagName=="BUTTON"){
     console.log('Hello');
 }
});


//
//btns.forEach(btn=>{
//    btn.addEventListener('click',()=>{
//        console.log('Hello');
//    });
//});
//
const btn=document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);