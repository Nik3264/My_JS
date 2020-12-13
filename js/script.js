"use strict";

function first(){
    //
    setTimeout(function(){
        console.log(1);
    },500);
}

function second(){
    console.log(2);
}

first();
second();

function learnJS(lang,callback){
    console.log(`I learn: ${lang}`);
    callback();
}

function myCallback(){
    console.log('lesson is done'); 
}

learnJS('JavaScript', myCallback);