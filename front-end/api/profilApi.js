//this is a simulation of an API call to get the profil data, in a real application this would be replaced with an actual API call to the backend

//simulated profil data

// ==================== APP PROFILES ====================
// GET /api/profiles/johndoe/
const profile = {
  id: 1,
  user_id: 1,
  pseudo: "@johndoe",
  profile_picture: "/front-end/assets/pictures/profil1.jpg",
  profession: "Web Developer",
  job_title: "Développeur Full Stack",
  about: `
    <p>
      Hello, I'm <strong>John Doe</strong>, a passionate web developer with 
      <strong>5 years of experience</strong>.
    </p>

    <p>
      I love creating <strong>beautiful and functional websites</strong> 
      that deliver real value to users.
    </p>

    <ul>
      <li>Spécialisé en <em>React, Django et Node.js</em></li>
      <li>Plus de 50 projets livrés avec succès</li>
      <li>Communication claire et délais respectés</li>
    </ul>

    <p>
      Mon objectif : transformer vos idées en 
      <strong>solutions digitales performantes</strong>.
    </p>
  `,
  experience_years: 5,
  since: "2018",
  rating: 4.5,
  reviews_count: 100,
  projects_completed: 50,
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Django",
    "PostgreSQL"
  ],
  
  stats: {
    response_time: "2 heures",
    response_rate: 98,
    orders_completed: 234,
    member_since: "Mars 2018"
  }
};


const services = [
  {
    id: 101,
    title: "Création de site web React",
    picture: "/front-end/assets/pictures/service1.png",
    rating: 4.8,
    reviews: 156,
    currency: "XAF",
    category: "Développement",
    description: `
      <p>
        Je crée des <strong>sites web modernes</strong> avec React et Node.js,
        optimisés pour la performance et le SEO.
      </p>
      <ul>
        <li>Design responsive et animations fluides</li>
        <li>Backend API RESTful sécurisé</li>
        <li>Déploiement et hébergement inclus</li>
      </ul>
    `,
    owner: {
      pseudo: "@johndoe",
      profilePicture: "/front-end/assets/pictures/profil1.jpg",
      profession: "Web Developer"
    },
    packs: [
      {
        name: "Pack Basic",
        price: 80000,
        delivery: "7 jours",
        features: [
          "Site vitrine 5 pages",
          "Design responsive",
          "Formulaire de contact",
          "Hébergement 1 an"
        ]
      },
      {
        name: "Pack Premium",
        price: 200000,
        delivery: "14 jours",
        features: [
          "Site complet 10+ pages",
          "Backend sur mesure",
          "Paiement en ligne intégré",
          "Dashboard admin",
          "SEO avancé",
          "Maintenance 3 mois"
        ]
      }
    ]
  },
  {
    id: 102,
    title: "API RESTful sur mesure",
    picture: "/front-end/assets/pictures/service2.png",
    rating: 4.9,
    reviews: 89,
    currency: "XAF",
    category: "Développement",
    description: `
      <p>
        Je développe des <strong>API RESTful robustes</strong> avec Django REST
        Framework, prêtes pour la production.
      </p>
      <ul>
        <li>Authentification JWT sécurisée</li>
        <li>Documentation Swagger interactive</li>
        <li>Tests automatisés et déploiement CI/CD</li>
      </ul>
    `,
    owner: {
      pseudo: "@johndoe",
      profilePicture: "/front-end/assets/pictures/profil1.jpg",
      profession: "Web Developer"
    },
    packs: [
      {
        name: "Pack Basic",
        price: 150000,
        delivery: "10 jours",
        features: [
          "API RESTful simple",
          "5 endpoints CRUD",
          "Authentification basique",
          "Documentation minimale"
        ]
      },
      {
        name: "Pack Premium",
        price: 350000,
        delivery: "21 jours",
        features: [
          "API complète multi-modules",
          "Authentification avancée JWT",
          "Documentation Swagger complète",
          "Tests unitaires",
          "Dockerisation",
          "Support 1 mois"
        ]
      }
    ]
  },
  {
    id: 103,
    title: "Maintenance et optimisation web",
    picture: "/front-end/assets/pictures/service1.png",
    rating: 4.7,
    reviews: 62,
    currency: "XAF",
    category: "Développement",
    description: `
      <p>
        Je maintiens et optimise vos <strong>sites web existants</strong>
        pour des performances maximales.
      </p>
      <ul>
        <li>Correction de bugs rapide</li>
        <li>Optimisation des performances</li>
        <li>Mise à jour de sécurité</li>
      </ul>
    `,
    owner: {
      pseudo: "@johndoe",
      profilePicture: "/front-end/assets/pictures/profil1.jpg",
      profession: "Web Developer"
    },
    packs: [
      {
        name: "Pack Basic",
        price: 50000,
        delivery: "3 jours",
        features: [
          "Correction de bugs",
          "Mise à jour CMS",
          "Sauvegarde du site",
          "Rapport d'intervention"
        ]
      },
      {
        name: "Pack Premium",
        price: 120000,
        delivery: "7 jours",
        features: [
          "Audit complet du site",
          "Optimisation vitesse",
          "Sécurisation avancée",
          "SEO technique",
          "Maintenance mensuelle",
          "Support prioritaire 24/7"
        ]
      }
    ]
  }
];
export function getProfileData() {
    return profile;
}

export function getMyServices() {
    return services;
}