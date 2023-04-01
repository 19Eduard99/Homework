'use strict';

function potato(lBorscht, priceKg, potatoInGrams, OneLiterOfPotatoes) {
    const weight = lBorscht * OneLiterOfPotatoes;
    const tWeight = weight * potatoInGrams;
    return Math.ceil(tWeight * priceKg)
}

console.log(potato(48, 13 , 0.075 ,4))
