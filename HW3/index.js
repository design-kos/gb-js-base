// Задание 1
// Создайте функцию которая возводит переданное число в куб,
// необходимо вывести в консоль результат 2 ^ 3 степени + 3 ^ 3 степени

function numberСubed(number) {
    return Math.pow(number, 3);
}

console.log(numberСubed(2) + numberСubed(3));



// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст,
// необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа
// и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

let userSalary = prompt("Укажите размер зарабатной платы до вычета налогов").replaceAll(' ', '');
console.log(salaryAfterTaxes(userSalary));

function isNumber(string) {
    return !isNaN(Number(string));
}

function salaryAfterTaxes(salary) {
    if (isNumber(salary) === true) {
        return salary * 0.87;
    } else {
        return "Вы ввели не число. Обновите страницу и попробуйте снова"
    }
}



// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию,
// которая определяет максимальное значение среди этих чисел

let userNumbers = prompt("Введите 3 числа через пробел");

if (isNumber(userNumbers) === true) {
    console.log(getMaxOfArray(splitStrings(userNumbers, ' ', 3)));
} else {
    console.log("Вы ввели не число. Обновите страницу и попробуйте снова");
}

function isNumber(string) {
    return !isNaN(Number(string.replaceAll(' ', '')));
}

function splitStrings(string, separator, amountOfElements) {
    return string.split(separator, amountOfElements);
}

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}



// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа
// и выполнять одну из операций(каждая функция выполняет одну из них):

function sumOfNumbers(num1, num2) {
    return num1 + num2;
}

function differenceOfNumbers(num1, num2) {
    if (num1 < num2) {
        return num2 - num1;
    } else {
        return num1 - num2;
    }
}

function multiplicationOfNumbers(num1, num2) {
    return num1 * num2;
}

function divisionOfNumbers(num1, num2) {
    return num1 / num2;
}