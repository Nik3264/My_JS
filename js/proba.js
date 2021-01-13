'use strict';


const myObj={
    'Иванов Иван Иванович':['f1','f2','f3']
};
console.log(myObj['Иванов Иван Иванович']);
for (let key in myObj){
    console.log(key,myObj[key]);
}





const {
    fio,fio1
    } = myObjJ;

console.log(fio, fio1);



let test="Пупкин Вася Иванович";

const {
    test: fio
    } = myObj;
    console.log(fio);


let test="Пупкин Вася Иванович";
console.log(test);

const {bo}