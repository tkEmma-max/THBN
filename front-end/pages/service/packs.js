import { getService } from '/front-end/api/servicesApi.js';

document.addEventListener('DOMContentLoaded', () => {
	const urlParams = new URLSearchParams(window.location.search);
	const id = urlParams.get('id');
	const service = getService(id);
	fillBasicPack(service);
	fillPremiumPack(service);
	sendOrderEvent(service);
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

function fillBasicPack(service) {
	const price = document.getElementById('basic-price');
	if (price) {
		price.textContent = service.packs[0].price;
	}
	const delivery = document.getElementById('basic-delivery');
	if (delivery) {
		delivery.textContent = service.packs[0].delivery;
	}
	fillFeature('basic-features', service, 0);
}

function fillPremiumPack(service) {
	const price = document.getElementById('premium-price');
	if (price) {
		price.textContent = service.packs[1].price;
	}
	const delivery = document.getElementById('premium-delivery');
	if (delivery) {
		delivery.textContent = service.packs[1].delivery;
	}
	fillFeature('premium-features', service, 1);
}

function sendOrder(service, packs_shoosed) {
	const urlParams = new URLSearchParams({ id: service.id, pack: packs_shoosed });
	window.location.href = `/front-end/pages/order/index.html?${urlParams.toString()}`;
}

function sendOrderEvent(service) {
	const basic = document.getElementById('basic-pack-button');
	const premium = document.getElementById('premium-pack-button');

	if (basic) {
		basic.addEventListener('click', () => {
			sendOrder(service, 0);
		});
	}
	if (premium) {
		premium.addEventListener('click', () => {
			sendOrder(service, 1);
		});
	}
}
