'use strict';

const a = +prompt("Enter first number ");
const b = +prompt("Enter second number ");

function fun1(a, b) {
     return a === b;
}
console.log(fun1(a,b));

function fun2(a, b) {
    return (a + b) > 10;
}
console.log(fun2(a,b));

const c = +prompt("Enter  number ");
function fun3(c) {
    return c < 0;
}
console.log(fun3(c));