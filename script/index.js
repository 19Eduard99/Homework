'use strict';

const a = parseFloat(prompt("a = ",));
const b = parseFloat(prompt("b = ",));
function sum(a, b) {
    return a + b;
}
alert("Result: " + a +' + '+ b + ' = ' + sum(a,b));

function minus(a, b){
    return a - b;
}
alert("Result: " + a +' - '+ b + ' = ' +  minus(a,b));

function multiply(a, b){
    return a * b;
}
alert("Result: " + a +' * '+ b + ' = ' + multiply(a,b));

function divide(a, b){
    return a / b;
}
alert("Result: " + a +' / '+ b + ' = ' + divide(a,b));