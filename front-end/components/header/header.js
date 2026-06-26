/*  - ce fichier permet de generer le header dynamique 
    - en fonction de lutilisateurs connecté ou non
    - pour quon est plus a le reecrire dans chaque page
*/

export class Header {
	constructor(user = null, profil = null, place = 'head') {
		this.user = user;
		this.profil = profil;
		this.place =
			document.getElementById(place) ||
			document.querySelector('header') ||
			null;
	}

	//positionnement du header
	renderHeader(selector) {
		if (!this.place) return;
		this.place.className = 'header-container flex-row';
		this.buildHeader(this.place);
	}

	//construction du header
	buildHeader(place) {
		place.appendChild(this.fillInfoApp());

		let nav_bar = document.createElement('nav');

		if (!this.user) {
			nav_bar.appendChild(this.fillNavNoConnected());
		} else {
			nav_bar.appendChild(this.fillNavConnected());
		}

		place.appendChild(nav_bar);

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
            <p class="app-name">TalentHub</p>
        `;
		return header_info_app;
	}

	fillNavConnected() {
		const nav_div = document.createElement('div');
		return nav_div;
	}

	fillNavNoConnected() {
		const nav_div = document.createElement('ul');
		nav_div.className = 'hd-nav-noConnected flex-row';
		nav_div.innerHTML = `
            <li class="nav-element"><a href="../home/index.html">acceuil</a></li>
            <li class="nav-element"><a href="../login/index.html">connexion</a></li>
            <li class="nav-element"><a href="../register/index.html">creer un compte</a></li>
            <span class="underliner"></span>
        `;
		return nav_div;
	}

	addMenuMobile() {
		let menu = document.createElement('span');
		menu.className = 'menu-mobile';
		menu.innerHTML = `
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
                        class = "svg-menu-mobile"
					>
						<path d="M4 5h16" />
						<path d="M4 12h16" />
						<path d="M4 19h16" />
					</svg>
    `;

		this.place.appendChild(menu);
	}
}

//recuperation de la largeur de lecran
function underline(underliner, element) {
	if (!element || !underliner) return;
	underliner.style.width = element.offsetWidth + 'px';

	let mobileWidth = window.innerWidth;

	if (mobileWidth < 650) {
		underliner.style.top = element.offsetTop + 'px';
		underliner.style.height =  element.offsetHeight + 'px';
		underliner.style.width =  '4px';
		underliner.style.left = "-5px";

	} else {
		underliner.style.left = element.offsetLeft + 'px';
		underliner.style.height = '4px';
		underliner.style.top = element.offsetTop + element.offsetHeight + "px";
	}
}


function responsive(e, header) {
	const menu = document.querySelector('.menu-mobile');
	if (e.matches) {
		if (menu){
			menu.style.display = "block";
		}else{
			header.addMenuMobile();
		}
		document.querySelector('nav').style.display = 'none';
	}else{
		if (menu){
			menu.style.display = "none";
		}
		document.querySelector('nav').style.display = 'block';
	}
}

function toggle(menu, element) {
	let showed = false;
	let windowsWidth = window.innerWidth;

	menu.addEventListener('click', function () {
		element.style.display = showed ? 'none' : 'flex';
		showed = !showed;
	});

	if (windowsWidth < 650){
		document.addEventListener('click', unshow = (e) => {
			if (!e.target.closest('.menu-mobile') && !e.target.closest('nav') ) {
				element.style.display = 'none';
			}
		});
	}else{
		document.removeEventListener('click', unshow);
	}
	
}

document.addEventListener('DOMContentLoaded', () => {
	const header = new Header();
	header.renderHeader('head');

	let mobileWidth = window.matchMedia('(max-width:620px)');

	let underliner = document.querySelector('.underliner');
	const boutton_nav = document.querySelectorAll('.nav-element');

	if (boutton_nav) {
		boutton_nav.forEach(nav => {
			nav.addEventListener('mouseenter', function () {
				underline(underliner, nav);
			});
		});
	}

	responsive(mobileWidth, header);
	mobileWidth.addEventListener('change', function () {
		responsive(mobileWidth, header)
	});

	let menu_mobile = document.querySelector('.menu-mobile');
	let nav_barre = document.querySelector('nav');

	if (nav_barre && menu_mobile) {
		toggle(menu_mobile, nav_barre);
	}
});
