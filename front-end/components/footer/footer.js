export class Footer {
	//positionnement du footer
	renderFooter(selector) {
		const place = document.getElementById(selector);

		if (!place) return;
		place.className = 'footer-container flex-column';
		this.buildFooter(place);
		this.element = place;
	}

	//construction du Footer
	buildFooter(place) {
		place.innerHTML = `
                <div class="footer-copyright">
                     &copy; 2023 TalentHub. Tous droits réservés.
                </div>
                <div class="footer-links flex-row">
                    <a href="#">Conditions d'utilisation</a>
                    <a href="#">Contact</a>
                </div>
                <div class="footer-socials flex-row">
                </div>
        `;
	}

	position(){
		const main = document.querySelector("main")
		console.log(main)
		if (main && this.element){
			const main_height = main.offsetHeight;
			if (main_height < document.body.offsetHeight){
				this.element.style.position = "fixed";
				this.element.style.bottom = 0;
			}
		}
	}
}
