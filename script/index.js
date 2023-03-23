'use strict';

const num = 8;
const symb = '*';
const bool = false;

const padString = (str, lenght, symb, right = true) => {
    if(typeof str !== 'string') return alert('some error');
    if(typeof  lenght !== 'number' || Number.isNaN(lenght) || !isFinite(lenght)){
        return alert('some error');
    }
    if(str.length === lenght) return str;
    if(str.length > lenght) return str.substring(0, lenght);

    if(typeof symb !== 'string' || symb.length !== 1)  return alert('some error');
    if(typeof right !== 'boolean') return alert('some error');

    const sym = symb.repeat(lenght - str.length);
    return right ? str + sym : sym + str
}
console.log(padString('hello', 8, '*'));
console.log(padString('hello', 6, '*', false));
console.log(padString('hello', 2));
