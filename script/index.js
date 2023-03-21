'use strict';

//1.Вивести на сторінку в один рядок через кому числа від 10 до 20.
let output = ' ';

for (let i = 10; i <= 20; i++) {
    output = output + i + ' ';
}
console.log(output);
console.log('');

//2. Вивести квадрати чисел від 10 до 20.

for (let a = 10; a <= 20; a++ ) {
    console.log(a ** 2)
}
console.log('');
//3.Вивести таблицю множення на 7.

for (let a = 1; a <= 10; a++ ) {
    console.log('7 * ' + a + ' = ' + a * 7)
}
console.log('');
//4.Знайти суму всіх цілих чисел від 1 до 15.

let sum = 0;
for (let a = 1; a <= 15; a++ ) {
    sum = sum + a;
}
console.log(sum);
console.log('');

//5. Знайти добуток усіх цілих чисел від 15 до 35.

let mult = 1;
for (let a = 15; a <= 35; a++ ) {
    mult = mult * a;
}
console.log(mult);
console.log('');


//6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let sum2 = 0;
for (let a = 1; a <= 500; a++ ) {
    sum2= sum2 + a;
}
console.log(sum2 / 500)
console.log('');

//7. Вивести суму лише парних чисел в діапазоні від 30 до 80.

let sum3 = 0;
for (let a = 30; a <= 80; a++ ) {
    if(a % 2 === 0){
        sum3 = sum3 + a;
    }
}
console.log(sum3)
console.log('');
//8.Вивести всі числа в діапазоні від 100 до 200 кратні 3.

for (let i = 100; i <= 200; i++){
    if (i % 3 === 0)
        console.log(i)
}
console.log('');

//9.Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
//10.Визначити кількість його парних дільників.
//11.Знайти суму його парних дільників.

let number = +prompt("Введите натуральное число");
let output2 = ' ';
let d = 0;
let sum4 = 0;

for(let i = 1; i <= number; i++){
    if(number % i === 0){
        output2 = output2 + i + ' ';
        if(i % 2 === 0){
            d++;
            sum4 = sum4 + i;
        }
    }
}
console.log('Дільники числа 12: ' + output2)
console.log('Кількість його парних дільників: ' + d)
console.log('Сума парних дільників: ' + sum4)
console.log('');

// 12. Надрукувати повну таблицю множення від 1 до 10.
for (let i = 1; i <= 10; i++) {
    console.log('');
    for (let j = 1; j <= 10; j++) {
        console.log(i + ' * ' + j + ' = ' + i * j );
    }
}
