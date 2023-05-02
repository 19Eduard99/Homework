'use strict';

function MyPalindrome(num, steps = 0) {
    const number =  parseInt(num.toString().split('').reverse().join(''));
    if (num === number) {
        return { result: num, steps: steps };
    } else {
        const sum = num + number;
        return MyPalindrome(sum, steps + 1);
    }

}
const palindrome = MyPalindrome(96);
console.log(palindrome)
