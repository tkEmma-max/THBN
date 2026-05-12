/*   ce module permet de definir lensemble des fonctions
permetant de::
//    recuperer tous les serviced 
//    recuperer un service particulier 
//    enregistrer un service
*/

const services = [
  // ==================== CATEGORIE 1 : DÉVELOPPEMENT ====================
  {
    id: 1,
    title: "Création d'application web sur mesure",
    picture: "/front-end/assets/pictures/service1.png",
    rating: 4.8,
    reviews: 234,
    currency: "XAF",
    category: "Développement",
    description: `
    <p>
      Je vous accompagne dans la 
      <strong>création complète</strong> 
      de votre application web.
    </p>

    <ul>
      <li>Design responsive</li>
      <li>Interface moderne</li>
      <li>Livraison rapide</li>
    </ul>
  `,

    owner: {
      pseudo: "@creaMaster",
      profilePicture: "/front-end/assets/pictures/profil1.jpg",
      profession: "Web Designer",
    },

    packs: [
      {
        name: "Pack Basique",
        price: 50000,
        delivery: "7 jours",
        features: [
          "Site vitrine",
          "Design responsive",
          "Formulaire de contact",
        ],
      },
      {
        name: "Pack Premium",
        price: 150000,
        delivery: "14 jours",
        features: [
          "Site e-commerce",
          "Paiement intégré",
          "Dashboard administrateur",
          "SEO optimisé",
          "Responsive complet",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "API RESTful avec Django",
    picture: "/front-end/assets/pictures/service2.png",
    rating: 4.9,
    reviews: 89,
    currency: "XAF",
    category: "Développement",
    description: `
    <h3>🏗️ Architecture robuste</h3>
    <p>
      Développement d'<strong>APIs RESTful</strong> sur mesure avec 
      <em>Django REST Framework</em>.
    </p>

    <ul>
      <li>Authentification JWT & OAuth2</li>
      <li>Documentation Swagger interactive</li>
      <li>Tests automatisés couverture > 90%</li>
      <li>Déploiement Docker & CI/CD inclus</li>
    </ul>
  `,

    owner: {
      pseudo: "@pythonNinja",
      profilePicture: "/front-end/assets/pictures/anonyme.svg",
      profession: "Développeur Backend",
    },

    packs: [
      {
        name: "Pack Starter",
        price: 250000,
        delivery: "10 jours",
        features: [
          "API RESTful simple",
          "3 endpoints CRUD",
          "Authentification basique",
          "Documentation minimale",
        ],
      },
      {
        name: "Pack Avancé",
        price: 500000,
        delivery: "20 jours",
        features: [
          "API complète multi-modules",
          "Authentification avancée (JWT + OAuth2)",
          "Documentation Swagger complète",
          "Tests unitaires & intégration",
          "Dockerisation",
          "Support 1 mois offert",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Application mobile React Native",
    picture: "/front-end/assets/pictures/service1.png",
    rating: 4.9,
    reviews: 67,
    currency: "XAF",
    category: "Développement",
    description: `
    <p>
      <strong>iOS et Android</strong> avec une seule base de code, 
      pour des performances natives.
    </p>

    <ul>
      <li>Interface native fluide (60fps)</li>
      <li>Performance optimale & temps de chargement réduit</li>
      <li>Mise en ligne sur les stores (App Store & Play Store)</li>
      <li>Compatibilité hors-ligne (offline-first)</li>
    </ul>
  `,

    owner: {
      pseudo: "@mobileDev",
      profilePicture: "/front-end/assets/pictures/anonyme.svg",
      profession: "Développeur Mobile",
    },

    packs: [
      {
        name: "Pack MVP",
        price: 600000,
        delivery: "21 jours",
        features: [
          "Application simple (5 écrans max)",
          "UI basique",
          "1 fonctionnalité principale",
          "Déploiement store simple",
          "Tests de base",
        ],
      },
      {
        name: "Pack Complet",
        price: 1200000,
        delivery: "45 jours",
        features: [
          "Application complète (illimitée écrans)",
          "UI/UX premium",
          "API intégrée + offline mode",
          "Push notifications",
          "Authentification sécurisée",
          "Déploiement stores + mise en conformité",
          "Maintenance 3 mois offerte",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Site e-commerce WordPress",
    picture: "/front-end/assets/pictures/service2.png",
    rating: 4.7,
    reviews: 156,
    currency: "XAF",
    category: "Développement",
    description: `
    <p>
      <strong>Boutique en ligne</strong> professionnelle clé en main 
      avec WooCommerce & meilleures pratiques e-commerce.
    </p>

    <ul>
      <li>Gestion avancée des produits (variations, stocks)</li>
      <li>Paiement 100% sécurisé (Mobile Money, CB, PayPal)</li>
      <li>Suivi des commandes automatisé</li>
      <li>Optimisation vitesse & conversions</li>
    </ul>
  `,

    owner: {
      pseudo: "@wordPress",
      profilePicture: "/front-end/assets/pictures/profil1.jpg",
      profession: "Développeur WordPress",
    },

    packs: [
      {
        name: "Pack Démarrage",
        price: 300000,
        delivery: "10 jours",
        features: [
          "Installation WordPress + WooCommerce",
          "Thème premium personnalisé",
          "Jusqu'à 20 produits",
          "2 passerelles de paiement",
          "Formation utilisation (1h)",
        ],
      },
      {
        name: "Pack Business",
        price: 600000,
        delivery: "20 jours",
        features: [
          "Boutique complète (produits illimités)",
          "Design sur mesure",
          "Toutes passerelles de paiement",
          "SEO e-commerce optimisé",
          "Email marketing intégré",
          "Maintenance & mises à jour 3 mois",
          "Formation avancée (3h)",
        ],
      },
    ],
  },

  // ==================== CATEGORIE 2 : DESIGN & CRÉATION ====================
  {
    id: 5,
    title: "Montage vidéo professionnel",
    picture: "/front-end/assets/pictures/service1.png",
    rating: 4.7,
    reviews: 312,
    currency: "XAF",
    category: "Design & Création",
    description: `
    <p>
      Montage vidéo de qualité professionnelle avec 
      <strong>Adobe Premiere Pro</strong> et 
      <strong>After Effects</strong>.
    </p>

    <ul>
      <li>Effets spéciaux & animations graphiques</li>
      <li>Transitions fluides & dynamiques</li>
      <li>Étalonnage colorimétrique avancé</li>
      <li>Mixage audio & sound design</li>
    </ul>
  `,

    owner: {
      pseudo: "@videoPro",
      profilePicture: "/front-end/assets/pictures/profil1.jpg",
      profession: "Vidéaste",
    },

    packs: [
      {
        name: "Pack Simple",
        price: 75000,
        delivery: "3 jours",
        features: [
          "Vidéo jusqu'à 5 minutes",
          "Montage simple (coupes & transitions)",
          "Musique libre de droits",
          "Titres basiques",
        ],
      },
      {
        name: "Pack Avancé",
        price: 150000,
        delivery: "7 jours",
        features: [
          "Vidéo jusqu'à 15 minutes",
          "Montage avancé + effets VFX",
          "Étalonnage cinématographique",
          "Sound design complet",
          "Sous-titres synchronisés",
          "Formats optimisés (YouTube, Instagram, TikTok)",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Création de logo personnalisé",
    picture: "/front-end/assets/pictures/service2.png",
    rating: 4.9,
    reviews: 567,
    currency: "XAF",
    category: "Design & Création",
    description: `
    <p>
      <strong>Identité visuelle unique</strong> qui reflète les valeurs 
      et la personnalité de votre marque.
    </p>

    <ul>
      <li>Fichiers vectoriels & déclinaisons</li>
      <li>3 concepts uniques proposés</li>
      <li>Modifications illimitées jusqu'à satisfaction</li>
      <li>Charte graphique incluse (couleurs & typographies)</li>
    </ul>
  `,

    owner: {
      pseudo: "@logoCreator",
      profilePicture: "/front-end/assets/pictures/anonyme.svg",
      profession: "Graphiste",
    },

    packs: [
      {
        name: "Pack Essentiel",
        price: 40000,
        delivery: "3 jours",
        features: [
          "1 concept de logo",
          "2 révisions",
          "Formats PNG & JPG HD",
          "Fichier source (.ai ou .svg)",
        ],
      },
      {
        name: "Pack Complet",
        price: 80000,
        delivery: "5 jours",
        features: [
          "3 concepts uniques",
          "Révisions illimitées",
          "Tous formats (PNG, JPG, SVG, PDF, EPS)",
          "Charte graphique complète",
          "Déclinaisons réseaux sociaux",
          "Favicon & icône mobile",
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Design d'interface utilisateur",
    picture: "/front-end/assets/pictures/service2.png",
    rating: 4.7,
    reviews: 203,
    currency: "XAF",
    category: "Design & Création",
    description: `
    <p>
      <strong>Maquettes professionnelles</strong> avec Figma pour 
      des expériences utilisateur intuitives.
    </p>

    <ul>
      <li>Prototypes interactifs cliquables</li>
      <li>Tests utilisateur & ajustements</li>
      <li>Design system complet (composants réutilisables)</li>
      <li>Accessibilité WCAG prise en compte</li>
    </ul>
  `,

    owner: {
      pseudo: "@uxDesign",
      profilePicture: "/front-end/assets/pictures/profil1.jpg",
      profession: "UX Designer",
    },

    packs: [
      {
        name: "Pack Écran Simple",
        price: 175000,
        delivery: "5 jours",
        features: [
          "1 page/écran designé",
          "Wireframe + maquette HD",
          "1 prototype simple",
          "2 révisions",
        ],
      },
      {
        name: "Pack Application",
        price: 350000,
        delivery: "12 jours",
        features: [
          "Jusqu'à 8 écrans",
          "Wireframe complet + maquettes HD",
          "Prototype interactif complet",
          "Design system (composants + guidelines)",
          "Test utilisateur (5 participants)",
          "Révisions illimitées",
        ],
      },
    ],
  },

  // ==================== CATEGORIE 3 : MARKETING DIGITAL ====================
  {
    id: 8,
    title: "SEO : Référencement Google",
    picture: "/front-end/assets/pictures/service1.png",
    rating: 4.6,
    reviews: 178,
    currency: "XAF",
    category: "Marketing Digital",
    description: `
    <p>
      <strong>Apparaissez en première page</strong> de Google et 
      attirez plus de visiteurs qualifiés.
    </p>

    <ul>
      <li>Audit SEO technique complet (200+ points analysés)</li>
      <li>Optimisation on-page (balises, contenu, structure)</li>
      <li>Stratégie de netlinking ciblée</li>
      <li>Suivi des positions mensuel</li>
    </ul>
  `,

    owner: {
      pseudo: "@seoExpert",
      profilePicture: "/front-end/assets/pictures/profil1.jpg",
      profession: "Référenceur Web",
    },

    packs: [
      {
        name: "Pack Audit",
        price: 150000,
        delivery: "7 jours",
        features: [
          "Audit technique complet",
          "Rapport détaillé avec recommandations",
          "Analyse des concurrents",
          "Plan d'action priorisé",
        ],
      },
      {
        name: "Pack Optimisation",
        price: 300000,
        delivery: "30 jours",
        features: [
          "Audit complet + mise en œuvre",
          "Optimisation on-page (jusqu'à 20 pages)",
          "Netlinking (10 backlinks qualité)",
          "Google Search Console intégré",
          "Rapport mensuel de progression",
          "Support 3 mois inclus",
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Rédaction d'articles SEO",
    picture: "/front-end/assets/pictures/service2.png",
    rating: 4.8,
    reviews: 892,
    currency: "XAF",
    category: "Marketing Digital",
    description: `
    <p>
      Articles de qualité professionnelle 
      <strong>optimisés pour le référencement naturel</strong>.
    </p>

    <ul>
      <li>Recherche de mots-clés stratégiques</li>
      <li>Style engageant & adapté à votre audience</li>
      <li>Maillage interne optimisé</li>
      <li>Contenu 100% original (anti-plagiat)</li>
    </ul>
  `,

    owner: {
      pseudo: "@redacPro",
      profilePicture: "/front-end/assets/pictures/profil1.jpg",
      profession: "Rédacteur Web",
    },

    packs: [
      {
        name: "Pack Article Simple",
        price: 20000,
        delivery: "2 jours",
        features: [
          "Article de 800 mots",
          "Recherche de 5 mots-clés",
          "Structure Hn optimisée",
          "2 révisions offertes",
        ],
      },
      {
        name: "Pack Premium",
        price: 40000,
        delivery: "4 jours",
        features: [
          "Article de 1500 mots",
          "Recherche complète de mots-clés",
          "Structure avancée + FAQ",
          "Images libres de droits intégrées",
          "Méta-description optimisée",
          "Révisions illimitées",
        ],
      },
    ],
  },
  {
    id: 10,
    title: "Rédaction de pages de vente",
    picture: "/front-end/assets/pictures/service1.png",
    rating: 4.8,
    reviews: 423,
    currency: "XAF",
    category: "Marketing Digital",
    description: `
    <p>
      Des textes qui <strong>convertissent vos visiteurs en clients</strong> 
      grâce au copywriting stratégique.
    </p>

    <ul>
      <li>Storytelling puissant & émotionnel</li>
      <li>Appels à l'action percutants (formule AIDA)</li>
      <li>2 versions proposées avec test A/B</li>
      <li>Optimisation du taux de conversion</li>
    </ul>
  `,

    owner: {
      pseudo: "@copywriter",
      profilePicture: "/front-end/assets/pictures/anonyme.svg",
      profession: "Copywriter",
    },

    packs: [
      {
        name: "Pack Landing Page",
        price: 100000,
        delivery: "3 jours",
        features: [
          "Page de vente complète",
          "Recherche du persona cible",
          "1 version avec 2 révisions",
          "Optimisation SEO basique",
        ],
      },
      {
        name: "Pack Tunnel de Vente",
        price: 200000,
        delivery: "7 jours",
        features: [
          "Tunnel complet (page de vente + relances email)",
          "Recherche approfondie",
          "2 versions avec test A/B",
          "Script vidéo de vente offert",
          "Séquence email (5 emails)",
          "Suivi des conversions sur 1 mois",
        ],
      },
    ],
  },

  // ==================== CATEGORIE 4 : DATA & IA ====================
  {
    id: 11,
    title: "Analyse de données avec Python",
    picture: "/front-end/assets/pictures/service1.png",
    rating: 5.0,
    reviews: 45,
    currency: "XAF",
    category: "Data & IA",
    description: `
    <p>
      <strong>Analyse et visualisation</strong> de vos données 
      pour prendre des décisions éclairées.
    </p>

    <ul>
      <li>Tableaux de bord interactifs (Dash, Streamlit)</li>
      <li>Modèles de machine learning prédictifs</li>
      <li>Nettoyage & transformation de données</li>
      <li>Rapports automatisés personnalisés</li>
    </ul>
  `,

    owner: {
      pseudo: "@dataGuru",
      profilePicture: "/front-end/assets/pictures/anonyme.svg",
      profession: "Data Analyst",
    },

    packs: [
      {
        name: "Pack Exploration",
        price: 400000,
        delivery: "5 jours",
        features: [
          "Analyse exploratoire complète",
          "Visualisations statiques (matplotlib/seaborn)",
          "Rapport Jupyter Notebook",
          "Recommandations basiques",
        ],
      },
      {
        name: "Pack Intelligence",
        price: 800000,
        delivery: "10 jours",
        features: [
          "Dashboard interactif complet",
          "Modèle ML prédictif (régression/classification)",
          "Pipeline de données automatisé",
          "Rapport détaillé + présentation",
          "Support technique 1 mois",
          "Formation utilisateur (2h)",
        ],
      },
    ],
  },
  {
    id: 12,
    title: "Chatbot intelligent avec IA",
    picture: "/front-end/assets/pictures/service2.png",
    rating: 4.9,
    reviews: 38,
    currency: "XAF",
    category: "Data & IA",
    description: `
    <p>
      <strong>Assistant conversationnel</strong> boosté à l'IA pour 
      automatiser votre service client 24/7.
    </p>

    <ul>
      <li>Traitement du langage naturel (NLP)</li>
      <li>Intégration WhatsApp, Messenger, site web</li>
      <li>Base de connaissances personnalisable</li>
      <li>Analyse des conversations en temps réel</li>
    </ul>
  `,

    owner: {
      pseudo: "@aiBuilder",
      profilePicture: "/front-end/assets/pictures/profil1.jpg",
      profession: "Ingénieur IA",
    },

    packs: [
      {
        name: "Pack FAQ Bot",
        price: 350000,
        delivery: "10 jours",
        features: [
          "Chatbot FAQ (questions/réponses)",
          "Jusqu'à 50 intentions",
          "Intégration 1 canal",
          "Interface d'administration",
          "Statistiques de base",
        ],
      },
      {
        name: "Pack IA Avancée",
        price: 900000,
        delivery: "25 jours",
        features: [
          "Chatbot NLP avancé (compréhension contextuelle)",
          "Intentions illimitées",
          "Intégration multi-canal (3 canaux)",
          "Transfert humain intelligent",
          "Analyse sémantique & sentiments",
          "Maintenance & amélioration continue 2 mois",
        ],
      },
    ],
  },
  {
    id: 13,
    title: "Automatisation de rapports avec Power BI",
    picture: "/front-end/assets/pictures/service1.png",
    rating: 4.8,
    reviews: 72,
    currency: "XAF",
    category: "Data & IA",
    description: `
    <p>
      <strong>Tableaux de bord Power BI</strong> automatisés pour 
      piloter votre activité en temps réel.
    </p>

    <ul>
      <li>Connexion à vos sources de données (Excel, SQL, APIs)</li>
      <li>KPIs personnalisés & alertes automatiques</li>
      <li>Mise à jour automatique programmée</li>
      <li>Partage sécurisé & embarquable</li>
    </ul>
  `,

    owner: {
      pseudo: "@biExpert",
      profilePicture: "/front-end/assets/pictures/anonyme.svg",
      profession: "Consultant BI",
    },

    packs: [
      {
        name: "Pack Starter",
        price: 250000,
        delivery: "8 jours",
        features: [
          "1 dashboard Power BI",
          "Jusqu'à 3 sources de données",
          "5 KPIs",
          "Mise à jour manuelle",
          "Documentation utilisateur",
        ],
      },
      {
        name: "Pack Entreprise",
        price: 650000,
        delivery: "18 jours",
        features: [
          "Dashboard complet multi-pages",
          "Sources de données illimitées",
          "KPIs & alertes personnalisées",
          "Mise à jour automatique programmée",
          "Sécurité Row-Level intégrée",
          "Formation équipe (4h)",
          "Support prioritaire 2 mois",
        ],
      },
    ],
  },

  // ==================== SERVICE BONUS : DESIGN & CRÉATION ====================
  {
    id: 14,
    title: "Illustration numérique personnalisée",
    picture: "/front-end/assets/pictures/service2.png",
    rating: 4.9,
    reviews: 145,
    currency: "XAF",
    category: "Design & Création",
    description: `
    <p>
      <strong>Illustrations digitales uniques</strong> pour vos projets, 
      des réseaux sociaux à l'impression.
    </p>

    <ul>
      <li>Styles variés (flat design, cartoon, réaliste)</li>
      <li>Adapté réseaux sociaux & print</li>
      <li>Fichiers sources livrés (.ai, .psd, .procreate)</li>
      <li>Révisions jusqu'à satisfaction</li>
    </ul>
  `,

    owner: {
      pseudo: "@artDigital",
      profilePicture: "/front-end/assets/pictures/anonyme.svg",
      profession: "Illustrateur Digital",
    },

    packs: [
      {
        name: "Pack Simple",
        price: 60000,
        delivery: "4 jours",
        features: [
          "1 illustration",
          "1 personnage ou objet",
          "Fond simple",
          "2 révisions",
          "Format HD (2000x2000px)",
        ],
      },
      {
        name: "Pack Scène Complète",
        price: 180000,
        delivery: "10 jours",
        features: [
          "Scène complète avec décor",
          "Jusqu'à 3 personnages",
          "Palette de couleurs personnalisée",
          "Révisions illimitées",
          "Déclinaisons réseaux sociaux",
          "Formats print & web inclus",
        ],
      },
    ],
  },
];

//simulation des categories
const categories = [
  {
    id: 1,
    name: "Développement",
    slug: "developpement",
    icon: "💻",
  },
  {
    id: 2,
    name: "Design & Création",
    slug: "design-creation",
    icon: "🎨",
  },
  {
    id: 3,
    name: "Marketing Digital",
    slug: "marketing-digital",
    icon: "📈",
  },
  {
    id: 4,
    name: "Data & IA",
    slug: "data-ia",
    icon: "🤖",
  },
];

export function getCategories() {
  return categories;
}

export function getServices() {
  return services;
}

export function getService(id_service) {
  const service = services.find((s) => s.id == id_service);
  return service;
}
