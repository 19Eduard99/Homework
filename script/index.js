'use strict';

const operator = prompt("Enter ( +, -, *, / ):");


const number1 = parseFloat(prompt("Enter number 1: "));
const number2 = parseFloat(prompt("Enter number 2: "));
let result;

if (operator === '+') {

    result = number1 + number2;
    alert("Result: " + number1 + operator + number2 + ' = ' +result);
}

else if (operator === '-') {
    result = number1 - number2;
    alert("Result: " + number1 + operator + number2 + ' = ' +result);
}
else if (operator === '*') {
    result = number1 * number2;
    alert("Result: " + number1 + operator + number2 + ' = ' +result);
}
else if (operator === '/') {
    result = number1 * number2;
    alert("Result: " + number1 + operator + number2 + ' = ' +result);
}
else {
    alert("error");
}