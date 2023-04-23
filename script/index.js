'use strict';

//1
const array = [2, 5, 7, 9, 9];

const myIndexOf = (arr, elm) => {
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === elm){
            return i;
        }
    }
    return -1;
}
console.log(myIndexOf(array,9));

//2
const myLastIndexOf = (arr, elm) => {
    for (let i = arr.length - 1; i >= 0; i--){
        if(arr[i] === elm){
            return i;
        }
    }
    return -1;
}
console.log(myLastIndexOf(array,9));

//3
const myFind = (arr) => {
        for (let i = 0; i < arr.length; i++){
            if(arr[i] === 7) {
                return arr[i];
            }
        }
    return undefined;
}
console.log(myFind(array));

//4
const myFindIndex = (arr) => {
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === 7) {
            return i;
        }
    }
    return undefined;
}
console.log(myFindIndex(array));

//5
const myIncludes = (arr, num) => {
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === num) {
            return true;
        }
    }
    return false;
}
console.log(myIncludes(array, 7));

//6
const myEvery = (arr) => {
    for (let i = 0; i < arr.length; i++){
        if(arr[i] < 1){
            return false
        }
    }
    return true
}
console.log(myEvery(array));

//7
const mySome = (arr) => {
    for (let i = 0; i < arr.length; i++){
        if(arr[i] >= 1){
            return true
        }
    }
    return false
}
console.log(mySome(array));
