'use strict';

//-------------------- 1

const zero = +prompt("Enter zero: ");
console.log(zero === 0 ? "Верно" : "Неверно");

//-------------------- 2

const aZero = +prompt("Enter number: ");
console.log(aZero > 0 ? "Верно" : "Неверно");

//-------------------- 3

const mZero = +prompt("Enter number: ");
console.log(mZero < 0 ? "Верно" : "Неверно");

//-------------------- 4

const lZero = +prompt("Enter number: ");
console.log(lZero >= 0 ? "Верно" : "Неверно");

//-------------------- 5

const equalsZero = +prompt("Enter number: ");
console.log(equalsZero <= 0 ? "Верно" : "Неверно");

//-------------------- 6

const noZero = +prompt("Enter number: ");
console.log(noZero !== 0 ? "Верно" : "Неверно");

//-------------------- 7

const test = prompt("Enter 'test': ");
console.log(test === 'test' ? "Верно" : "Неверно");

//-------------------- 8

const one = prompt("Enter '1': ");
console.log(one === '1' ? "Верно" : "Неверно");

//-------------------- 9

const num1 = +prompt("Enter number");
if (num1 > 0 && num1 < 5 ) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

//-------------------- 10

let num2 = +prompt("Enter number");
if (num2 === 0 || num2 === 2) {
    num2 += 2;
    console.log(num2);
} else {
    num2 /= 10;
    console.log(num2);
}

//-------------------- 11

const num3 = +prompt("Enter a");
const num4 = +prompt("Enter b");
if (num3 <= 1 && num4 >= 3){
    const sum = num3 + num4;
    console.log(sum);
} else {
    const minus = num3 - num4;
    console.log(minus);
}

//-------------------- 12

const num5 = +prompt("Enter a");
const num6 = +prompt("Enter b");
if(num5 > 2 && num5 < 11 || num6 >= 6 && num6 < 14){
    console.log("Верно");
} else {
    console.log("Неверно")
}

//-------------------- 13

const num = +prompt("Enter number:");
let result;
switch (num){
    case 1:
        result = 'Winter';
        console.log(result);
        break;
    case 2:
        result = 'Spring';
        console.log(result);
        break;
    case 3:
        result = 'Autumn';
        console.log(result)
        break;
    case 4:
        result = 'Summer';
        console.log(result);
        break;
    default:
        console.log('Nooooooooo!')
}