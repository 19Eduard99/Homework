'use strict';
function fib(n = 1) {
    const result = [0, 1];
    for(let i = 2; i <= n; i++){
        const prevN1 = result[i - 1];
        const prevN2 = result[i - 2];
        result.push(prevN1 + prevN2);
    }
    return result[n];
}
console.log(fib(10));
