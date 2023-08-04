// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } 
    else if (i % 2 !== 0) {
        console.log(`${i} - нечетное число`);
    } else {
        console.log(`${i} - четное число`);
    }
}



// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2)
console.log(arr);



// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

let userNumber;
let findNumber = 3;

do {
    userNumber = prompt("Укажите длину массива");
    if (isNumber(userNumber) === false) {
        alert("Вы ввели не число. Попробуйте снова");
    }
} while (!isNumber(userNumber));

const randomArray = getRandomArray(userNumber);
let div = document.createElement('div');
div.className = "js-info";
div.innerHTML = `Сгенерированный массив: ${randomArray}.
<br>Сумма элементов массива ${randomArray} равна ${getSum(randomArray)}.
<br>Минимальное число в массиве ${randomArray} равно ${Math.min(...randomArray)}.
<br>Количество чисел ${findNumber} в массиве ${randomArray} равно ${hasNumber(randomArray, findNumber)}.`;
document.body.append(div);

function isNumber(string) {
    return !isNaN(Number(string));
}

function getRandomArray(arrayLenght) {
    let array = [];
    for (let i = 0; i < arrayLenght; i++) {
        array.push(Math.ceil(Math.random() * 10));
    }
    return array;
}

function getSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function hasNumber(array, number) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            count++;
        }
    }
    return count;
}