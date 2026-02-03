let userName = prompt('Введите Ваше имя: ');
let age = prompt('Введите Ваш возраст: ');

var wrapper = document.getElementById('promoWrapper');

if (age < 16) {
    wrapper.classList.toggle('first');
}
else if (age >= 16 && age < 35) {
    wrapper.classList.toggle('second');
} else {
    wrapper.classList.toggle('third');
}

let promoTitle = document.getElementById('friendly'); 

promoTitle.innerHTML = `Добро пожаловать, ${userName}!<br>Лучшие сорта кофе<br>со всего мира!`