"use strict";
/*
const numberOfFilms=+prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private:false
};*/

/*const a=prompt('Один из последних просмотренных фильмов?', ''),
    b=prompt('На сколко оцените его?', ''),
    c=prompt('Один из последних просмотренных фильмов?', ''),
    d=prompt('На сколко оцените его?', '');

personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;*/
/*
for (let i=0; i<2;i++){
    const a=prompt('Один из последних просмотренных фильмов?', ''),
    b=prompt('На сколко оцените его?', '');
    if(a!=null && b!=null && a!='' && b!='' && a.length<50){
    personalMovieDB.movies[a]=b;
    console.log('done');
    }else{
        console.log('error');
        i--;
    }
}

if(personalMovieDB.count<10){
    console.log('мало');
}else if(personalMovieDB.count>=10 && personalMovieDB.count<30){
    console.log('классика');
}else if(personalMovieDB.count>=30){
    console.log('много');
}else {
    console.log('error last');
}
console.log(personalMovieDB);*/

let num=20;

function showFirstMessage(text){
    console.log(text);
    let num=10;
    console.log(num);
}

showFirstMessage("Hello world!");
console.log(num);

function calc(a,b){
    return (a+b);
}
console.log(calc(4,3));
console.log(calc(5,6));

function ret(){
    let num=50;
    return num;
}

const anotherNum=ret();
console.log(anotherNum);

const logger=function(){
    console.log("Hello");
};
logger();

const calc1=(a,b)=>{return (a+b);};