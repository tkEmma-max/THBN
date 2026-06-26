import { Header } from '/front-end/components/header/header.js';
import { Footer } from '/front-end/components/footer/footer.js';


document.addEventListener('DOMContentLoaded', () => {
	const footer = new Footer();
	footer.renderFooter('foot');
});
