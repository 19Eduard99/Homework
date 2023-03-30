'use strict';
const num  = prompt('Введите число ');
const degree  = +prompt('Введите степень ');

function  operation(num ,degree  = 1 ) {
   if(isNaN(num) || isNaN(degree) || num === null || degree  === null){
      return  alert('error');
   }
      return Math.pow(num , degree );
}

const result = operation(num , degree);
if(result !== undefined){
   alert(operation(num , degree));
}
