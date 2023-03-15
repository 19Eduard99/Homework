'use strict';

const x = 4;
const y = 9;
const r = 10;

const lengthHypotenuse  = Math.sqrt(x*x + y*y);
const result = (lengthHypotenuse <= r) ? "Точка внутри окружности" : "Точка не внутри окружности";
console.log(result);