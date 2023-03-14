'use strict';

// Задание 1

const  a = +prompt('Введите год моего рождения');

if(a < 1999  || a > 1999 || isNaN(a)) {
    console.log('Неверно');
} else {
    console.log("Верно");
}

//Задание 2

const numOrStr1 = prompt('input number or string');

switch (true){
    case (numOrStr1 === null):
        console.log('вы отменили');
        break;
    case  (numOrStr1.trim() === ''):
        console.log('Empty String');
        break;
    case (isNaN(+numOrStr1)):
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}
