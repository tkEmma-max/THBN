import { note_etoile } from '/front-end/components/etoile/etoile.js';
import { getServices, getService } from '/front-end/api/servicesApi.js';

document.addEventListener('DOMContentLoaded', () => {
	const services = getServices();
	const urlParams = new URLSearchParams(window.location.search);
	const id_service = urlParams.get('id');
	if (!id_service) {
		serviceNotFound();
	} else {
		const service = getService(id_service);
		fillServiceInfos(service);
	}
});

function fillServiceInfos(service) {
	// Remplir les champs avec les données du service
	document.querySelector('.service-title p').textContent = service.title;
	document.querySelector('.service-note').textContent = service.rating;
	document.querySelector('.service-avis').textContent = service.reviews;
	document.querySelector('.service-prix').textContent =
		service.packs[0].price;
	document.querySelector('.service-delivery').textContent =
		service.packs[0].delivery;
	document.querySelector('.service-profil-pseudo').textContent =
		service.pseudo;
	document.querySelector('.service-profil-prof').textContent =
		service.profession;
	document.querySelector('.service-about-text').innerHTML =
		service.description;

	// Afficher les étoiles dynamiques
	const starContainer = document.querySelector('.service-star');
	if (starContainer) {
		starContainer.innerHTML = '';
		starContainer.appendChild(note_etoile(parseFloat(service.rating)));
	}

	// Afficher la photo de profil
	const profilContainer = document.querySelector('.service-profil-container');
	if (profilContainer && service.owner.profilePicture) {
		profilContainer.style.backgroundImage = `url("${service.owner.profilePicture}")`;
		profilContainer.style.backgroundSize = 'cover';
		profilContainer.style.backgroundPosition = 'center';
	}

	//remplissage de la gelerie
	if (service.picture) {
		document.querySelector('.image-placeholder').remove();
		const pictures_container = document.getElementById('images-grid');
		if (pictures_container) {
			const image = document.createElement('img');
			image.alt = 'service picture';
			image.src = service.picture;
			image.className = 'image';
			pictures_container.appendChild(image);
		}
	}
}

function serviceNotFound() {
	document.querySelectorAll('section').forEach(sect => {
		sect.style.display = 'none';
	});
	document.querySelector('.service-not-found').style.display = 'flex';
}
