'use strict';

let calculator = {
    read: () => {
        this.a = +prompt('Введи первое число ');
        this.b = +prompt('Введи второе число ');
        if (isNaN(this.a) || isNaN(this.b)) {
            alert('Введи числа')
            calculator.read()
        }
    },
    sum: () => {return this.a + this.b},
    mul: () => {return this.a * this.b}
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
