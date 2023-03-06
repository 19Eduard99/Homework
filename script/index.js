'use strict';

let objectUser = {}
objectUser.name = 'John';
objectUser.surname = 'Smith';
objectUser.name = 'Pete';
delete objectUser.name

// объект объявленный с помощью const можно изменить потомучто, объект - это ссылочный тип данных
const user = {
    name: 'John'
};
user.name = 'Pete';
console.log(user);

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const sum = salaries.John + salaries.Ann + salaries.Pete
console.log(sum);