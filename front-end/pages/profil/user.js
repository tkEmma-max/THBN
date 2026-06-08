import { getMyUser } from '../../api/usersApi.js';
import { getMyProfil } from '../../api/profilApi.js';
import { note_etoile } from '../../components/etoile/etoile.js';
document.addEventListener('DOMContentLoaded', async () => {
	const profil = await getMyProfil();
	const user = await getMyUser();

	fillProfil(profil, user);
	fillAbout(profil);
});

function fillProfil(profil, user) {
	//user data
	document.querySelector('.name').textContent =
		user.first_name + ' ' + user.last_name;

	document.querySelector('.email').textContent = user.email;

	//profil data
	document.querySelector('.pseudo').textContent = profil.pseudo;
	document.querySelector('.rating').textContent = profil.rating;
	document.querySelector('.reviews').textContent =
		`( ${profil.reviews_count} avis)`;
	document.querySelector('.projects').textContent =
		`${profil.projects_completed} projets réslisés`;
	document.querySelector('.job-title').textContent = profil.profession;
	document.querySelector('.experience').textContent =
		`${profil.experience_years} années d'experience`;
	document.querySelector('.since').textContent = `depuis ${profil.since}`;

	//ajout des étoiles
	document.querySelector('.rating').appendChild(note_etoile(profil.rating));
}

function fillAbout(profil) {
	const about = document.querySelector('.about-content');
	if (about) {
		about.innerHTML = '';
		about.innerHTML = profil.about;
	}
}
