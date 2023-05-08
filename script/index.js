'use strict';

const findLi = () => {
    const arr = [];
    const arrText = [];
    for (const el of document.querySelectorAll('li')) {
        arr.push(el);
        arrText.push(el.innerText);
    }
    return [arr, arrText]
}
const [arr, arrText] = findLi()
for (const el of arr) {
    console.log(el);
}
console.log(arrText);
console.log(arr.length);
