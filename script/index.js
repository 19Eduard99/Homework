'use strict';

const number = +prompt("Введите число:");

if (isNaN(number) || number <= 1) {
    console.log(NaN);
} else {
    let i = 2;
    while (number % i !== 0) {
        i++;
    }
    if (number === i) {
        alert('Число ' + number + ' простое');
    } else {
        alert('Наименьший делитель числа ' + number + ' = ' + i);
    }
}
