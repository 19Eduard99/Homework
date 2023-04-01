'use strict';
const num  = prompt('Введите число ');
const degree  = +prompt('Введите степень ');

function  operation(num ,degree  = 1 ) {
   if(isNaN(num) || isNaN(degree) || num === null || degree  === null || num.trim() === ""){
      return 'error';
   } else {
      return num ** degree;
   }
}

const result = operation(num , degree);
alert(result);

