'use strict';

let year = prompt('В каком году ты родился?');
if (year === null) {
    alert('Жаль, что вы не захотели ввести свой год рождения');
} else {
    let city = prompt('В каком городе ты живешь?');
    if (city === null) {
        alert('Жаль, что вы не захотели ввести свой город');
    } else {
        let sport = prompt(`Какой твой любимый вид спорта?`);
        if (sport === null) {
            alert('Жаль, что вы не захотели ввести свой любимый вид спорта');
        } else {
            let capital;
            if (city === 'Киев' || city === 'Москва' || city === 'Минск') {
                capital = 'Ты живешь в столице ' + city;
            } else {
                capital = 'Ты живешь в городе ' + city;
            }
            let champion;
            if (sport === 'Шахматы') {
                champion = 'Круто! Хочешь стать как Магнус Карлсен!';
            } else if (sport === 'баскетбол') {
                champion = 'Круто! Хочешь стать как Коби Брайантом!';
            } else if (sport === "теннис") {
                champion = 'Круто! Хочешь стать как Рафаэлем Надалем!';
            } else {
                champion = 'Твой любимый вид спорта - ' + sport;
            }
            let age = 2023 - year;
            alert('Ваш возраст: ' + age + 'лет\n' + capital + '\n' + champion);
        }
    }
}