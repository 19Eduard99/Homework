'use strict';
// 1
const arrOne = [1, 2, 3];
const arrTwo = [4, 5, 6];

const result = arrOne.concat(arrTwo);
console.log(result);

// 2
const arrThree = [1, 2, 3];
const rev = arrThree.reverse();
console.log(rev)

// 3
const arrFour = [1, 2, 3];
arrFour.push(4,5,6);
console.log(arrFour);

// 4
const arrFive = ['js', 'css', 'jq'];
console.log(arrFive[0]);
console.log(arrFive[arrFive.length - 1]);

// 5
const arrSix = [1, 2, 3, 4, 5];
const newArrSix = arrSix.slice(0, 3);
console.log(newArrSix);
const newArrSix2 = arrSix.slice(3, arrSix.length);
console.log(newArrSix2);

// 6
const arrSeven = [1, 2, 3, 4, 5];
arrSeven.splice(1,2);
console.log(arrSeven);

// 7
const arrEight = [1, 2, 3, 4, 5];
arrEight.splice(3,0, 'a', 'b', 'c');
console.log(arrEight)

// 8
const arrNine = [1, 2, 3, 4, 5];
arrNine.splice(1,0,'a', 'b');
arrNine.splice(6,0,'c');
arrNine.splice(8,0,'e');
console.log(arrNine);

// 9
const arrTen = [3, 4, 1, 2, 7];
arrTen.sort((a, b) => a - b);
console.log(arrTen);

// 10
const arrEleven = [5, 6, 7, 8, 9];
const arrEleven2 = arrEleven.reduce((value,item) => {
    return item + value;
}, 0);
console.log(arrEleven2);

// 11
const arrTwelve = [5, 6, 7, 8, 9];
const arrTwelve2 = arrTwelve.map((item) => {
    return item * item;
})
console.log(arrTwelve2)

// 12
const arrThirteen = [1,-3, 5, 6,-7, 8, 9, -11];
const arrThirteen2 = arrThirteen.filter((item) => {
    return  item < 0;
})
console.log(arrThirteen2)

// 13
const arrFourteen = [1,-3, 5, 6,-7, 8, 9,-11];
const arrFourteen2 = arrFourteen.filter((item) => {
    return item % 2 === 0;
})
console.log(arrFourteen2);

// 14
const arrFifteen = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const arrFifteen2 = arrFifteen.filter((item) => {
    return item.length > 5
})
console.log(arrFifteen2);

// 15
const arrSixteen = [1, 2, [3, 4], 5, [6, 7]];
const arrSixteen2 = arrSixteen.filter((num) => Array.isArray(num));
console.log(arrSixteen2);

// 16
const arrSeventeen =  [5,-3, 6,-5, 0,-7, 8, 9];
const arrSeventeen2 = arrSeventeen.reduce((value, item) => {
    return item < 0 ? value + 1 : value;
},0);
console.log(arrSeventeen2)
