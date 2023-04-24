'use strict';

//1
const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];


const arr1  = arr.filter(elem => elem > 0).reduce((value, item) =>{
    return value + item;
},0)
const arr2  = arr.filter(elem => elem > 0).reduce((value, item) =>{
    return item > 0 ? value + 1 : value;
},0)
console.log("Суму позитивних елементів: " + arr1);
console.log("Кількість позитивних елементів: " + arr2);


//2
const min = Math.min(...arr);
const index = arr.indexOf(min);

console.log(min, index)
