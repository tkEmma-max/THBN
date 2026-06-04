//this a simulation of an API call to fetch reviews data

//simulated reviews data
// ==================== REVIEWS DE JOHNDOE ====================
// GET /api/profiles/johndoe/reviews/
const reviews = [
  {
    id: 1,
    rating: 5.0,
    comment: "Excellent travail ! John a créé exactement le site que je voulais, avec des finitions impeccables. Je recommande vivement.",
    created_at: "2026-05-20",
    reviewer: {
      pseudo: "@marieL",
      profilePicture: "/front-end/assets/pictures/anonyme.svg",
      profession: "Entrepreneure"
    }
  },
  {
    id: 2,
    rating: 4.5,
    comment: "Très bon développeur, réactif et professionnel. Le projet a été livré dans les temps. Je referai appel à lui.",
    created_at: "2026-04-15",
    reviewer: {
      pseudo: "@pierreT",
      profilePicture: "/front-end/assets/pictures/anonyme.svg",
      profession: "Chef de projet"
    }
  },
  {
    id: 3,
    rating: 5.0,
    comment: "John a sauvé mon projet ! Il a repris un code mal fait et l'a rendu propre et performant. Un vrai pro.",
    created_at: "2026-03-10",
    reviewer: {
      pseudo: "@sophieB",
      profilePicture: "/front-end/assets/pictures/profil1.jpg",
      profession: "Designer"
    }
  },
  {
    id: 4,
    rating: 4.0,
    comment: "Bon travail dans l'ensemble. Quelques ajustements mineurs nécessaires mais John les a corrigés rapidement. Satisfait.",
    created_at: "2026-02-28",
    reviewer: {
      pseudo: "@thomasR",
      profilePicture: "/front-end/assets/pictures/anonyme.svg",
      profession: "Freelance"
    }
  },
  {
    id: 5,
    rating: 5.0,
    comment: "Incroyable ! API livrée en avance, documentation parfaite, code propre. C'est rare de trouver cette qualité.",
    created_at: "2026-01-15",
    reviewer: {
      pseudo: "@lauraM",
      profilePicture: "/front-end/assets/pictures/anonyme.svg",
      profession: "Développeuse"
    }
  },
  {
    id: 6,
    rating: 4.5,
    comment: "John a très bien compris mes besoins. Communication fluide tout au long du projet. Je recommande.",
    created_at: "2025-12-05",
    reviewer: {
      pseudo: "@alexK",
      profilePicture: "/front-end/assets/pictures/anonyme.svg",
      profession: "Marketeur"
    }
  }
];

export function getMyReviews() {
    return reviews;
}