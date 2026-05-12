import { Header } from '/front-end/components/header/header.js';
import { Footer } from '/front-end/components/footer/footer.js';
import { getService } from '/front-end/api/servicesApi.js';

document.addEventListener('DOMContentLoaded', () => {
	const hd = new Header();
	const ft = new Footer();
	hd.renderHeader('hd');
	ft.renderFooter('ft');

	const urlParams = new URLSearchParams(window.location.search);
	const id = urlParams.get('id');
	const service = getService(id);
	fillPackInfo(service, urlParams.get('pack'));

	fillServiceMeta(service);
});

function fillFeature(ul, service, packs) {
	const place = document.getElementById(ul);
	if (!place) return;

	service.packs[packs].features.forEach(ft => {
		const li = document.createElement('li');
		li.textContent = ft;
		place.appendChild(li);
	});
}

function fillPackInfo(service, pack) {
	document.querySelector('.pack-title').textContent = parseInt(pack)
		? 'Pack Premium'
		: 'Pack Basic';
	const price = document.getElementById('price');
	if (price) {
		price.textContent = service.packs[pack].price;
	}
	const delivery = document.getElementById('delivery');
	if (delivery) {
		delivery.textContent = service.packs[pack].delivery;
	}
	fillFeature('features', service, pack);
}

function fillServiceMeta(service) {
	const title = document.querySelector('.service-title');
	const owner = document.querySelector('.service-owner');
	if (title) {
		title.textContent = service.title;
	}
	if (owner) {
		owner.textContent = service.owner.pseudo;
	}
}
