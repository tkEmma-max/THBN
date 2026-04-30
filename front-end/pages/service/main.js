import { Header } from "/front-end/components/header/header.js";
import { note_etoile } from "/front-end/components/etoile/etoile.js";

document.addEventListener("DOMContentLoaded", () => {
  const hd = new Header();
  hd.renderHeader("hd");
  fillServiceInfos();
});

function fillServiceInfos() {
  const service = JSON.parse(sessionStorage.getItem("service-clicked"));
  // Remplir les champs avec les données du service
  document.querySelector(".service-title p").textContent = service.title;
  document.querySelector(".service-note").textContent = service.note;
  document.querySelector(".service-avis").textContent = service.avis;
  document.querySelector(".service-prix").textContent = service.price;
  document.querySelector(".service-delivery").textContent = service.delivery;
  document.querySelector(".service-profil-pseudo").textContent = service.pseudo;
  document.querySelector(".service-profil-prof").textContent =
    service.profession;

  // Afficher les étoiles dynamiques
  const starContainer = document.querySelector(".service-star");
  if (starContainer) {
    starContainer.innerHTML = "";
    starContainer.appendChild(note_etoile(parseFloat(service.note)));
  }

  // Afficher la photo de profil
  const profilContainer = document.querySelector(".service-profil-container");
  if (profilContainer && service.profil) {
    profilContainer.style.backgroundImage = `url("${service.profil}")`;
    profilContainer.style.backgroundSize = "cover";
    profilContainer.style.backgroundPosition = "center";
  }

  // Nettoyer après affichage (optionnel)
  sessionStorage.removeItem("selectedService");
}
