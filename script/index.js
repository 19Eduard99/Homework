'use strict';

const mainFunction = (callback) => {
    const num1 = +prompt('Введите первое число');
    const num2 = +prompt('Введите второе число');
    return callback(num1, num2);
}

const exponentiation = (a, b) => {
    if (isNaN(a) || isNaN(b)){
        return alert('error');
    } else {
        const result = a ** b;
        return alert(result);
    }
}
const multiplay = (a, b) => {
    if (isNaN(a) || isNaN(b)){
        return alert('error');
    } else {
        const result = a * b;
        return alert(result);
    }
}

const division = (a, b) => {
    if (isNaN(a) || isNaN(b)){
        return alert('error');
    } else {
        const result = a / b;
        return alert(result);
    }
}

const modulo = (a, b) => {
    if (isNaN(a) || isNaN(b)){
        return alert('error');
    } else {
        const result = a % b;
        return alert(result);
    }
}

mainFunction(exponentiation);
// mainFunction(multiplay);
// mainFunction(division);
// mainFunction(modulo);
