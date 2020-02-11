let input;
let total = 0;
let userNumber;

while (userNumber !== null || userNumber === NaN) {
	userNumber = prompt('enter num');
	total += Number(userNumber);
} 
alert(`Общая сумма чисел равна ${total}`)