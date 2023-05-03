'use strict';

void function () {
    const array = [1, 2, [3, 4], [[5 ,6], 7]];
    const flat = (...args) => {
        if (args.length !== 1) throw new Error('Function accepts only 1 argument, too much arguments provided');
        const result = [];
        args[0].forEach((item) => {
            if (Array.isArray(item)) {
                return result.push(...flat(item));
            } else {
                return result.push(item);
            }
        })
        return result;
    }
    console.log(flat(array));
}();
