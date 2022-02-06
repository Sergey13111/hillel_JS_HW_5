"use strict";

// 1
let userName = prompt("Введите имя");
let userLastName = prompt("Введите фамилию");
let userAge = prompt("Введите возраст");

alert(`${userName} ${userLastName}, ${userAge}`);

// 2
let c = +prompt("Введите первое число");
let d = +prompt("Введите второе число");

let sum = c + d;
let subtraction = c - d;
let multiplication = c * d;
let division = c / d;
let exponentiation = c ** d;

alert(`${c} + ${d} = ${sum}`);
alert(`${c} - ${d} = ${subtraction}`);
alert(`${c} * ${d} = ${multiplication}`);
alert(`${c} / ${d} = ${division}`);
alert(`${c} ** ${d} = ${exponentiation}`);

// 3
let age = +prompt("Укажите свой возраст")
if (age < 18) {
    alert("Данная страница доступна только для взрослых")
}

// 4
let number = +prompt("Введите число");

if (isNaN(number) === true) {
    alert("Вы не ввели число");
}
else {
    if (number % 2 === 0) {
        alert("Число четное");
    }
    else {
        alert ("Число не четное");
    }
}

// 5)
let num = +prompt("Введите число");
let randomNum = Math.random();
let comparisonResult = num > randomNum;
alert(`${num} > ${randomNum} ${comparisonResult}`);

// 6
let newNum = +prompt("Введите данные");

if (!isNaN(newNum) === true) {
    alert("Вы ввели число");
}
else {
    alert("Вы ввели не число");
}

// 7
let date = new Date();
let month = date.getMonth();

if (month === 11 || month <= 1) {
    alert("Сейчас зима");
} else if (month >= 2 && month <= 4) {
    alert("Сейчас весна");
} else if (month >= 5 && month <= 7) {
    alert("Сейчас лето");
} else  {
    alert("Сейчас осень");
}

switch (month) {
    case 11:
    case 0:
    case 1:
        alert("Сейчас зима");
    break;

    case 2:
    case 3:
    case 4:
        alert("Сейчас весна");
    break;

    case 5:
    case 6:
    case 7:
        alert("Сейчас лето");
    break;

    default:
        alert("Сейчас осень");
    break;
}

// 8)
let points = +prompt("Введите число");
let divisionRemainder;
let stringPoints;
if (points >= 0 && points <=100) {
    if (points >= 11 && points<= 14) {
        stringPoints = "баллов";
    }
    else {
        divisionRemainder = points % 10;
        switch (divisionRemainder) {
            case 2:
            case 3:
            case 4:
                stringPoints = "балла";
            break;
            case 1:
                stringPoints = "балл";
            break;
            default:
                stringPoints = "баллов";
            break;
        }
    }
}
alert(`Ваша оценка: ${points} ${stringPoints}`);

