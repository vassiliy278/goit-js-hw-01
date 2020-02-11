let credits = 23580;

const pricePerDroid = 3000;

let quantityForBuy = prompt('Сколько Дроидов купить?');

let totalPrice;

let creditsLeft;

if (quantityForBuy === null) {
	console.log('Отменено пользователем!')
} else if (quantityForBuy !== null) {
	totalPrice = quantityForBuy * pricePerDroid;
}

if (totalPrice > credits) {
	console.log('Недостаточно средств на счету!')
} else if (totalPrice < credits) {
	creditsLeft = credits - totalPrice;
	console.log(`Вы купили ${quantityForBuy} дроидов, на счету осталось ${creditsLeft} кредитов.`)
}
