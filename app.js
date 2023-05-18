// ДЗ-14
// 1 ЗАВДАННЯ

// function calcAge(year) {
//   return 2023 - year;
// }
// let userName = prompt("Як вас звати?");
// let year = prompt("Рік народження?");
// function yearsUntilRetirement(year, userName) {
//   let age = calcAge(year);
//   let retirement = 60 - age;

//   if (retirement > 0) {
//     console.log(`${userName} вийде на пенсію через ${retirement} років`);
//   } else {
//     return `${userName} вже пенсіонер`;
//   }
// }
// console.log(yearsUntilRetirement(year, userName));

// 2 ЗАВДАННЯ

// let a = +prompt("Вкажіть чісло а");
// let b = +prompt("Вкажіть чісло b");

// function max(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// alert(max(a, b));

// 3 ЗАВДАННЯ

// let n = +prompt("Вкажіть день тижня");
// function weekFn(n) {
//   let str = "";
//   switch (n) {
//     case 1:
//       return (str = "Понеділок");
//     case 2:
//       return (str = "Вівторок");
//     case 3:
//       return (str = "Середа");
//     case 4:
//       return (str = "Четверг");
//     case 5:
//       return (str = "П'ятниця");
//     case 6:
//       return (str = "Субота");
//     case 7:
//       return (str = "Неділя");
//     default:
//       return null;
//   }
// }
// alert(weekFn(n));
//
//
//
//
//
//
//
//
// ДЗ-15

// 1 ЗАВДАННЯ

// 1 спосіб
// function foo(a, b, c) {
//   if (c) {
//     if (a > b) {
//       return a;
//     } else {
//       return b;
//     }
//   } else {
//     if (a < b) {
//       return b;
//     } else {
//       return a;
//     }
//   }
// }

// 2 спосіб
// function foo(a, b, c) {
//   if (c) {
//     return a > b ? a : b;
//   } else {
//     return a < b ? a : b;
//   }
// }
// console.log(foo(5, 4, true));
// console.log(foo(25, 40, false));

// 2 ЗАВДАННЯ

// function fizzBuzz() {
//   for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }
// fizzBuzz();

// 3 ЗАВДАННЯ

// function rangeNumbers(a, b) {
//   if (b > a) {
//     for (let i = a; i <= b; i++) {
//       if (i % 2 !== 0);
//     }
//   } else {
//     console.log("Помилка, значення b має бути більше ніж значення a");
//   }
// }
// rangeNumbers(1, 16);
//
//
//
//
//
//
//
//
//
//
// ДЗ-16
// 1 ЗАВДАННЯ

// const arrNum = [1, 22, 45, 66, 77, 12, 33, 100];

// let max = arrNum[0];
// for (let i = 0; i < arrNum.length; i++) {
//   if (arrNum[i] > max) {
//     max = arrNum[i];
//   }
// }
// console.log(max);

// 2 ЗАВДАННЯ

// let expenses = {};
// let expensesNumber = +prompt("Введіть кількість категорій витрат");

// for (let i = 1; i <= expensesNumber; i++) {
//   let expensesCategory = prompt("Введіть назву категорії");
//   let expensesValue = +prompt(
//     `Скількі кошті ви витратили на ${expensesCategory}`
//   );
//   expenses[expensesCategory] = expensesValue;
// }

// function totalExpenses(object) {
//   let total = 0;
//   for (let key in object) {
//     total += object[key];
//   }
//   return total;
// }

// const myExpenses = totalExpenses(expenses);
// console.log(`Ваша сума вітрат становить = ${myExpenses} грн`);
