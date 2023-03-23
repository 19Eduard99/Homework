'use strict';

const arr = [1, 2, 3, -1, -2, -3];

function myArray(array) {
    const exampleArr = [];
    if(!array.length) return 'Пустой массив';

    for (let i = 0; i < array.length; i++){
        if(array[i] > 0){
            exampleArr.push(array[i]);
        }
    }
    if(!exampleArr.length) return null;

    return exampleArr;
}

console.log(myArray(arr));
