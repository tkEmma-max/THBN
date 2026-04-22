/*  - ce fichier permet de generer le header dynamique 
    - en fonction de lutilisateurs connecté ou non
    - pour quon est plus a le reecrire dans chaque page
*/

export class Header {
	constructor(user = null, profil = null) {
		this.user = user;
		this.profil = profil;
	}

	//positionnement du header
	renderHeader(selector) {
		const place = document.getElementById(selector);

		if (!place) return;
		place.className = 'header-container flex-row';
		this.buildHeader(place);
	}

	//construction du header
	buildHeader(place) {
		place.appendChild(this.fillInfoApp());
		return;
	}

	//remplissage des données de lapplicarion (logo, nom)
	fillInfoApp() {
		const header_info_app = document.createElement('div');
		header_info_app.className = 'app-meta flex-row';
		header_info_app.innerHTML = `
            <div class="logo-container">
                <img src="/front-end/assets/pictures/Logo.png" alt="logo"/>
            </div>
            <p class="name-app">TalentHub</p>
        `;
		return header_info_app;
	}
}
