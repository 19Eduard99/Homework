'use strict';

function potato(lBorscht, priceKg) {
    const potatoInGrams  = 0.075;
    const OneLiterOfPotatoes = 4;
    const weight = lBorscht * OneLiterOfPotatoes;

    const tWeight = weight * potatoInGrams;
    return Math.ceil(tWeight * priceKg)
}

console.log(potato(48, 13))
