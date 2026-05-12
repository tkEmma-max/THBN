import { Header } from '/front-end/components/header/header.js';
import { Footer } from '/front-end/components/footer/footer.js';

document.addEventListener('DOMContentLoaded', () => {
	const hd = new Header();
	const ft = new Footer();
	hd.renderHeader('hd');
	ft.renderFooter('ft');
});
