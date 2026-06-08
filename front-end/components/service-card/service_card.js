import { note_etoile } from '../etoile/etoile.js';

function service_Template() {
	const sv_template = document.createElement('template');
	sv_template.className = 'flex-column';
	sv_template.innerHTML = `
          <div class="service flex-column">
            <span class="service-favorite">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                />
              </svg>
            </span>
            <div class="service-img"></div>
            <p class="service-title"></p>
            <div class="service-review flex-row">
              <p class="flex-row">
                <span class="service-note">4.5</span
                ><span class="service-star"></span>
              </p>
              <p class="flex-row">(<span class="service-avis"></span>avis)</p>
            </div>

            <div class="service-meta flex-row">
              <p><span class="service-prix"></span>FCFA</p>
              <p class="flex-row">
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 6v6l4 2" />
                    <circle cx="12" cy="12" r="10" /></svg
                ></span>
                <span class="service-delivery"></span> jours
              </p>
            </div>
            <div class="service-profil flex-row" style="display: none">
              <div class="service-profil-container profil"></div>
              <div class="service-profil-infos flex-column">
                <p class="service-profil-pseudo"></p>
                <p class="service-profil-prof"></p>
              </div>
              <div class="profil-mention flex-column">
                <span class="profil-verified"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(32,161,32,1)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
                    />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </span>
                <p class="profil-top-rated">top rated</p>
              </div>
            </div>
          </div>`;
	return sv_template;
}


export function createServiceCard(service) {
    const template = service_Template();

	if (!template) {
		return null;
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
	const idUrlParam = new URLSearchParams({ id: service.id });
	template_content.addEventListener('click', () => {
		window.location.href = `/front-end/pages/service/index.html?${idUrlParam.toString()}`;
	});

	//remplissage
	title.innerText = service.title;
	picture.style.backgroundImage = `url("${service.picture}")`;
	profil.style.backgroundImage = `url("${service.owner.profilePicture}")`;
	pseudo.innerText = service.owner.pseudo;
	profession.innerText = service.owner.profession;
	note.innerText = service.rating;
	avis.innerText = service.reviews;
	prix.innerText = service.packs[0].price;
	delivery.innerText = service.packs[0].delivery;
	star.appendChild(note_etoile(parseFloat(service.rating)));

	return clone_template;
}

export function renderServices(services, selector) {
	const fragment = document.createDocumentFragment();
	services.forEach(service => {
		let element = createServiceCard(service);
		fragment.appendChild(element);
	});

	const place = document.getElementById(selector)
	if (place) {
		place.innerHTML = '';
		place.appendChild(fragment);
	}
}

