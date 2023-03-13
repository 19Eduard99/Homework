'use strict';

//Task# 1

const numBoolean = Boolean(Number("10")) + 1;
console.log(numBoolean) // Выведет 2 потомучто true + 1 = 2 (true = 1)

const str = "sub" + Number(false);
console.log(str); // Выведет "sub0" потомучто false = 0, пройзойдет конкатанация

const multiply = 16  *  "      91    ";
console.log(multiply); // умножения работает потомучто сторока "      91    " пребразуеться в число 91


const numTrue = true - 70;
console.log(numTrue); // Выведет -69 потомучто true = 1, 1 - 70 = -69

const num = Number(1 + String(1)) + 1;
console.log(num); // Выведет 12, явное преоброзование строки 11 в число, 11 + 1 = 12

//Task# 2

const hour = parseFloat(prompt("Enter the number of hours: "));
if(hour >= 0) {
    const secInOneHour = 3600;
    const result = hour * secInOneHour;
    alert("In " + hour + " hour(s) " + result + " secs");
} else {
    alert("ERROR")
}

//Task #3

let num2 = 1;
num2 += 12;
num2 -= 14;
num2*= 5;
num2 /= 7;
num2 += 1;
num2 -= 1;
alert(num2);