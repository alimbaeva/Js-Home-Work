/*
1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы,
 десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’:
    5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее
    сообщение с помощью console.log и вернуть пустой объект.
*/

var namber = prompt('Ведите число от 0 до 999: ');
numObj = {};

function num(x) {
    if (!isNaN(x)) {
        if (999 < namber.length && namber.length < 0) {
            console.log('Веденное число' + namber + 'не соответсвует запросу');
        } else {
            switch (namber.length) {
                case 3:
                    numObj.units = namber[2];
                    numObj.tens = namber[1];
                    numObj.hundreds = namber[0];
                    break;
                case 2:
                    numObj.units = namber[1];
                    numObj.tens = namber[0];
                    break;
                case 1:
                    numObj.units = namber[0];
                default:
                    console.log('Веденное число' + namber + 'не соответсвует запросу');
            }
            console.log(numObj);
        }
    } else {
        alert('Вы ввели не число!');
    }
    return numObj;
}

num(namber);