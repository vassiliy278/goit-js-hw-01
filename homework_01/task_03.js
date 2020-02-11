const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let input = prompt('Введите пароль');
if (input === ADMIN_PASSWORD) {
	message = 'Добро пожаловать!'
} else if (input === null) {
	message = 'Отменено пользователем!'
} else (message = 'Доступ запрещен, неверный пароль!')
alert(message)