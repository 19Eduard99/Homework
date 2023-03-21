'use strict';
let a = +prompt('Введите число ');
let b = +prompt('Введите степень ');

function f1(a,b =1 ) {
   if(isNaN(a) || isNaN(b)){
       return alert('error');
   }
   else {
       let step = a ** b;
       return alert(step);
   }
}

let result = f1(a,b);
