'use strict';
const a = +prompt('Введите число ');
const b = +prompt('Введите степень ');

function f1(a,b =1 ) {
   if(isNaN(a) || isNaN(b)){
       return alert('error');
   }
   else {
       const step = a ** b;
       return alert(step);
   }
}

const result = f1(a,b);
