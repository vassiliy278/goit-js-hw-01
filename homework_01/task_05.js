let cn = 'китай';
let cl = 'чили';
let au = 'австралия';
let ind = 'индия';
let jm = 'ямайка';

let cost;
let userCountry = prompt('Введите свою страну');
console.log(userCountry);

switch (userCountry) {
  case cn.toLowerCase():
    cost = 100;
    break;

  case cl.toLowerCase():
    cost = 250;
    break;

  case au.toLowerCase():
    cost = 170;
    break;

  case ind.toLowerCase():
    cost = 80;
    break;

  case jm.toLowerCase():
    cost = 120;
    break;

  default:
  	alert('В вашей стране доставка не доступна');
  	break
}
if (userCountry === cn || userCountry === cl || userCountry === ind || userCountry === au || userCountry === jm) {
	alert(`Доставка в ${userCountry.toUpperCase()} будет стоить ${cost} кредитов`)
}
