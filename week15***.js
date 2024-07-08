// создаем массив и заполняем его числами от -10 до 10
let numbers = [];
for (let i = -10; i <=10; i++) {
    numbers.push(i);
};
console.log(numbers);


// убираем из массива числа, которые меньше 0 
let positiveNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
        positiveNumbers.push(numbers[i]);
    }
};
console.log(positiveNumbers);


// возводим в квадрат отобранные числа
let squaredNumbers = [];
for (let i = 0; i < positiveNumbers.length; i++) {
    positiveNumbers[i] = positiveNumbers[i] * positiveNumbers[i];
    squaredNumbers.push(positiveNumbers[i]);
};
console.log(squaredNumbers);


// реверсируем числа (вариант 1, с методом sort)
// numbers.sort((a,b) => {
// return b - a;
// }); 
// console.log(numbers);

// риверсируем числа (с помощью массива)
let reversedNumbers = [];
for (let i = squaredNumbers.length - 1; i >= 0; i--) {
    reversedNumbers.push(squaredNumbers[i]);
};

console.log(reversedNumbers);  

