'use strict';
let budgetValue = prompt("Ваш бюджет на месяц?", '');
let dateValue = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
	budget : budgetValue,
	timeData : dateValue,
	expenses  : {},
	optionalExpenses : {},
	income : {},
	savings : false
};

let product1 = prompt("Введите обязательную статью расходов в этом месяце", '');
let cost1 = prompt("Во сколько обойдется?", '');

appData.expenses[product1] = cost1;

let product2 = prompt("Введите обязательную статью расходов в этом месяце", '');
let cost2 = prompt("Во сколько обойдется?", '');


appData.expenses[product2] = cost2;

let sumOnDay = (Number(budgetValue) / 30);

alert('Бюджет на 1 день: ' + sumOnDay );

console.log(appData);
console.log(appData);
