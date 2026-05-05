export class Footer {
	//positionnement du footer
	renderFooter(selector) {
		const place = document.getElementById(selector);

		if (!place) return;
		place.className = 'footer-container flex-column';
		this.buildFooter(place);
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
}
