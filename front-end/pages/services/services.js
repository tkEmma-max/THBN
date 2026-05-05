import { note_etoile } from '/front-end/components/etoile/etoile.js';
import { getServices } from '/front-end/api/servicesApi.js';

const services = getServices()

function fillServiceTemplate(service) {
	const template = document.getElementById('service-template');
	if (!template) {
		return 0;
	}

	//selection des elements
	let clone_template = template.content.cloneNode(true);
	const title = clone_template.querySelector('.service-title');
	const picture = clone_template.querySelector('.service-img');
	const profil = clone_template.querySelector('.service-profil-container');
	const pseudo = clone_template.querySelector('.service-profil-pseudo');
	const note = clone_template.querySelector('.service-note');
	const avis = clone_template.querySelector('.service-avis');
	const star = clone_template.querySelector('.service-star');
	const prix = clone_template.querySelector('.service-prix');
	const delivery = clone_template.querySelector('.service-delivery');
	const profession = clone_template.querySelector('.service-profil-prof');

	//ajout de lecouteur devenemment
	const template_content = clone_template.querySelector('.service');
	template_content.addEventListener('click', () => {
		sessionStorage.setItem('service-clicked', JSON.stringify(service));
		window.location.href = '/front-end/pages/service/index.html';
	});

	//remplissage
	title.innerText = service.title;
	picture.style.backgroundImage = `url("${service.picture}")`;
	profil.style.backgroundImage = `url("${service.profil}")`;
	pseudo.innerText = service.pseudo;
	profession.innerText = service.profession;
	avis.innerText = service.avis;
	prix.innerText = service.price;
	delivery.innerText = service.delivery;
	star.appendChild(note_etoile(parseFloat(service.note)));

	return clone_template;
}

function renderServices(services, selector) {
	const fragment = document.createDocumentFragment();
	services.forEach(service => {
		let element = fillServiceTemplate(service);
		fragment.appendChild(element);
	});

	const place = document.querySelector(selector).appendChild(fragment);
}

document.addEventListener('DOMContentLoaded', () => {
	renderServices(services, '.all-services');
});
