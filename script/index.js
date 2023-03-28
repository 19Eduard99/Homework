'use strict';

const num = +prompt('Enter number');
let bol = true;
if (num < 2) {
    bol = false;
}   else {
        for (let  i = 2; i < num; i++){
            if (num % i === 0){
                bol = false;
                break;
            }
        }
}
console.log(bol);
