import { Header } from '/front-end/components/header/header.js';
import { Footer } from '/front-end/components/footer/footer.js';
import { setProfil } from '../../api/profilApi.js';
document.addEventListener('DOMContentLoaded', () => {
	const footer = new Footer();
	footer.renderFooter('foot');
	submitFormEvent();
});

function submitFormEvent() {
	const login_form = document.getElementById('login-form');
	if (!login_form) return;

	login_form.addEventListener('submit', async e => {
		e.preventDefault();

		let formData = new FormData(login_form);
		let data = Object.fromEntries(formData.entries())

		const response = setProfil(data);
	});
}
 