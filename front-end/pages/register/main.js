import { Header } from '/front-end/components/header/header.js';
import { Footer } from '/front-end/components/footer/footer.js';

document.addEventListener('DOMContentLoaded', () => {
	const footer = new Footer();
	footer.renderFooter('foot');

	addEventSwitch();
});

function switchBox(first_select, second_select) {
	let first_elem = document.querySelector(first_select);
	let second_elem = document.querySelector(second_select);

	if (!first_elem || !second_elem) return;

	first_elem.style.display = 'none';
	second_elem.style.display = 'flex';
}

function addEventSwitch() {
	let next = document.getElementById('next');
	let previous = document.getElementById('previous');

	if (next) {
		next.addEventListener('click', () => {
			switchBox('.first-register-page', '.second-register-page');
		});
	}

	if (previous) {
		previous.addEventListener('click', () => {
			switchBox('.second-register-page', '.first-register-page');
		});
	}
}
