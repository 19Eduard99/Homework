'use strict';

const x = 10, y = 7;
console.log(x > y ? "X больше, чем Y" : "X не больше, чем Y");

const num = +prompt("Введите первое число: ");
if(num % 2 === 0){
    alert("Число " + num + " четное");
} else {
    alert("Число " + num + " не четное");
}

const num2 = prompt("Введите целое число:");
let numLength = num2.length;

if (num2 > 0){
    console.log("Число " + num2 +" положительное");
} else if ( num2 < 0){
    console.log("Число " + num2 +" отрицательное");
} else {
    console.log("Вы ввели 0 или другие символы!")
}

if (numLength === 1) {
    console.log("Однозначное число");
} else if (numLength === 2) {
    console.log("Двухначное число");
} else if (numLength === 3) {
    console.log("Трехзначное число");
} else {
    console.log("Число состоит из " + numLength + " цифр");
}

if (num2[0] > num2[1] && num2[0] > num2[2] ){
    console.log("Цифра " + num2[0] + " больше чем " + num2[1] + " и " + num2[2] );
} else if (num2[1] > num2[0] && num2[1] > num2[2]){
    console.log("Цифра " + num2[1] + " больше чем " + num2[0] + " и " + num2[2] );
} else {
    console.log("Цифра " + num2[2] + " больше чем " + num2[0] + " и " + num2[1] );
}
