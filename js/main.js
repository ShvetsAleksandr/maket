"use strict"
const close = document.querySelector('.warning__close');
const warning = document.querySelector('.header__warning');

close.addEventListener('click', function (event) {
	warning.classList.add("close");
});

const icons = document.querySelectorAll('.burger');
const menu = document.querySelectorAll('.header__nav');
const headerMenu = document.querySelector('.header__nav');
const body = document.querySelector('body');
icons.forEach(icon => {
	icon.addEventListener('click', (event) => {
		icon.classList.toggle('open');
		headerMenu.classList.toggle('active');

	});
});
