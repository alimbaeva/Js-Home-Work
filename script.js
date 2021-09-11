// Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.


var a = -4;
var b = 4;
var c = 0;

a = parseInt(Math.random() * b + a);
console.log('a=' + a);

b = parseInt(Math.random() * b + a);
console.log('b=' + b);
function NumberVal(a, b) {
    if (a >= 0 && b >= 0) {
        c = a * b;
        console.log('a=' + a, ', b=' + b, ' a-b=' + c);
    } if (a < 0 && b < 0) {
        c = a * b;
        console.log('a=' + a, ', b=' + b, ' a*b=' + c);
    } else {
        c = a + b;
        console.log('a=' + a, ', b=' + b, ' a+b=' + c);
    }
}
console.log(NumberVal(a, b));

// Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15. 
// Можно сделать решение двумя способами. Второй способ - использовать рекурсию, можно без switch

alert('№ - 4');
function showNumbersUnilZerro(n) {
    if (n === 15) {
        return 15;
    }
    console.log(n);
    showNumbersUnilZerro(n + 1);

}
var d = 3;
showNumbersUnilZerro(n = parseInt(Math.random() * 15 + d));



// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.



alert('№ - 5');

function summa(a, b) {
    return a + b;
};

function minus(a, b) {
    return a - b;
};

function mult(a, b) {
    return a * b;
};

function division(a, b) {
    if (b != 0)
        return a / b;
    return 0
};


console.log(summa(2, 3));
console.log(minus(2, 3));
console.log(mult(2, 3));
console.log(division(2, 3));

// 6. Реализовать функцию с тремя параметрами:
//  function mathOperation(arg1, arg2, operation), 
//  где arg1, arg2 – значения аргументов, operation – строка с названием операции.
//   В зависимости от переданного значения операции выполнить одну из арифметических 
//   операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

function mathOperation(arg1, arg2, oper) {
    switch (oper) {
        case '+':
            a = summa(arg1, arg2);
            return a
            break;
        case '-':
            a = minus(arg1, arg2);
            return a
            break;
        case '*':
            a = division(arg1, arg2);
            return a
            break;
        case '/':
            a = mult(arg1, arg2);
            return a
            break;
    };
};
console.log(mathOperation(2, 3, '+'));


// 8. *С помощью рекурсии организовать функцию возведения числа в степень.
//  Формат: function power(val, pow), где val – заданное число, pow – степень.

function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

alert(pow(5, 3));

//------------------------

// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.


var a = 1;
while (a != false) {
    if (a === 100) {
        break
    }
    console.log("цифра = " + a);
    a++;
}

//---------------------------------

// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

var goods = [
    {
        title: 'товар 1',
        price: 100,
        count: 3
    },
    {
        title: 'товар 2',
        price: 200,
        count: 4
    },
    {
        title: 'товар 3',
        price: 300,
        count: 1
    },
];

var countBasketPrice = 0;
var s = 0;
for (var item of goods) {
    var sum = item.price * item.count
    s += sum;
    console.log(item.title + ' стоит ' + item.price + ' количество ' + item.count + ' итого ' + sum);
}
alert('Общая сумма ' + s)


//----------------------------------------------------


