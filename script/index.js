'use strict';
const a = prompt('Введите число ');
const b = prompt('Введите степень ');

function f1(a,b =1 ) {
   if(isNaN(a) || isNaN(b)) return  alert('error');
   return Math.pow(a, b);
}

const result = f1(a, b);
alert(result);
