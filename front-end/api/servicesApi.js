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
		picture: '/front-end/assets/pictures/service1.png',
		rating: 4.8,
		reviews: 234,
		currency: 'XAF',
		category: 'Développement',
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
			pseudo: '@creaMaster',
			profilePicture: '/front-end/assets/pictures/profil1.jpg',
			profession: 'Web Designer'
		},

		packs: [
			{
				name: 'Pack Basic',
				price: 50000,
				delivery: '7 jours',
				features: [
					'Site vitrine',
					'Design responsive',
					'Formulaire de contact'
				]
			},
			{
				name: 'Pack Premium',
				price: 150000,
				delivery: '14 jours',
				features: [
					'Site e-commerce',
					'Paiement intégré',
					'Dashboard administrateur',
					'SEO optimisé',
					'Responsive complet'
				]
			}
		]
	},
	{
		id: 2,
		title: "API RESTful avec Django",
		picture: '/front-end/assets/pictures/service2.png',
		rating: 4.9,
		reviews: 89,
		currency: 'XAF',
		category: 'Développement',
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
			pseudo: '@pythonNinja',
			profilePicture: '/front-end/assets/pictures/anonyme.svg',
			profession: 'Développeur Backend'
		},

		packs: [
			{
				name: 'Pack Basic',
				price: 250000,
				delivery: '10 jours',
				features: [
					'API RESTful simple',
					'3 endpoints CRUD',
					'Authentification basique',
					'Documentation minimale'
				]
			},
			{
				name: 'Pack Premium',
				price: 500000,
				delivery: '20 jours',
				features: [
					'API complète multi-modules',
					'Authentification avancée (JWT + OAuth2)',
					'Documentation Swagger complète',
					'Tests unitaires & intégration',
					'Dockerisation',
					'Support 1 mois offert'
				]
			}
		]
	},
	{
		id: 3,
		title: "Application mobile React Native",
		picture: '/front-end/assets/pictures/service1.png',
		rating: 4.9,
		reviews: 67,
		currency: 'XAF',
		category: 'Développement',
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
			pseudo: '@mobileDev',
			profilePicture: '/front-end/assets/pictures/anonyme.svg',
			profession: 'Développeur Mobile'
		},

		packs: [
			{
				name: 'Pack Basic',
				price: 600000,
				delivery: '21 jours',
				features: [
					'Application simple (5 écrans max)',
					'UI basique',
					'1 fonctionnalité principale',
					'Déploiement store simple',
					'Tests de base'
				]
			},
			{
				name: 'Pack Premium',
				price: 1200000,
				delivery: '45 jours',
				features: [
					'Application complète (illimitée écrans)',
					'UI/UX premium',
					'API intégrée + offline mode',
					'Push notifications',
					'Authentification sécurisée',
					'Déploiement stores + mise en conformité',
					'Maintenance 3 mois offerte'
				]
			}
		]
	},
	{
		id: 4,
		title: "Site e-commerce WordPress",
		picture: '/front-end/assets/pictures/service2.png',
		rating: 4.7,
		reviews: 156,
		currency: 'XAF',
		category: 'Développement',
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
			pseudo: '@wordPress',
			profilePicture: '/front-end/assets/pictures/profil1.jpg',
			profession: 'Développeur WordPress'
		},

		packs: [
			{
				name: 'Pack Basic',
				price: 300000,
				delivery: '10 jours',
				features: [
					'Installation WordPress + WooCommerce',
					'Thème premium personnalisé',
					'Jusqu\'à 20 produits',
					'2 passerelles de paiement',
					'Formation utilisation (1h)'
				]
			},
			{
				name: 'Pack Premium',
				price: 600000,
				delivery: '20 jours',
				features: [
					'Boutique complète (produits illimités)',
					'Design sur mesure',
					'Toutes passerelles de paiement',
					'SEO e-commerce optimisé',
					'Email marketing intégré',
					'Maintenance & mises à jour 3 mois',
					'Formation avancée (3h)'
				]
			}
		]
	},

	// ==================== CATEGORIE 2 : DESIGN & CRÉATION ====================
	{
		id: 5,
		title: "Montage vidéo professionnel",
		picture: '/front-end/assets/pictures/service1.png',
		rating: 4.7,
		reviews: 312,
		currency: 'XAF',
		category: 'Design & Création',
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
			pseudo: '@videoPro',
			profilePicture: '/front-end/assets/pictures/profil1.jpg',
			profession: 'Vidéaste'
		},

		packs: [
			{
				name: 'Pack Basic',
				price: 75000,
				delivery: '3 jours',
				features: [
					'Vidéo jusqu\'à 5 minutes',
					'Montage simple (coupes & transitions)',
					'Musique libre de droits',
					'Titres basiques'
				]
			},
			{
				name: 'Pack Premium',
				price: 150000,
				delivery: '7 jours',
				features: [
					'Vidéo jusqu\'à 15 minutes',
					'Montage avancé + effets VFX',
					'Étalonnage cinématographique',
					'Sound design complet',
					'Sous-titres synchronisés',
					'Formats optimisés (YouTube, Instagram, TikTok)'
				]
			}
		]
	},
	{
		id: 6,
		title: "Création de logo personnalisé",
		picture: '/front-end/assets/pictures/service2.png',
		rating: 4.9,
		reviews: 567,
		currency: 'XAF',
		category: 'Design & Création',
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
			pseudo: '@logoCreator',
			profilePicture: '/front-end/assets/pictures/anonyme.svg',
			profession: 'Graphiste'
		},

		packs: [
			{
				name: 'Pack Basic',
				price: 40000,
				delivery: '3 jours',
				features: [
					'1 concept de logo',
					'2 révisions',
					'Formats PNG & JPG HD',
					'Fichier source (.ai ou .svg)'
				]
			},
			{
				name: 'Pack Premium',
				price: 80000,
				delivery: '5 jours',
				features: [
					'3 concepts uniques',
					'Révisions illimitées',
					'Tous formats (PNG, JPG, SVG, PDF, EPS)',
					'Charte graphique complète',
					'Déclinaisons réseaux sociaux',
					'Favicon & icône mobile'
				]
			}
		]
	},
	{
		id: 7,
		title: "Design d'interface utilisateur",
		picture: '/front-end/assets/pictures/service2.png',
		rating: 4.7,
		reviews: 203,
		currency: 'XAF',
		category: 'Design & Création',
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
			pseudo: '@uxDesign',
			profilePicture: '/front-end/assets/pictures/profil1.jpg',
			profession: 'UX Designer'
		},

		packs: [
			{
				name: 'Pack Basic',
				price: 175000,
				delivery: '5 jours',
				features: [
					'1 page/écran designé',
					'Wireframe + maquette HD',
					'1 prototype simple',
					'2 révisions'
				]
			},
			{
				name: 'Pack Premium',
				price: 350000,
				delivery: '12 jours',
				features: [
					'Jusqu\'à 8 écrans',
					'Wireframe complet + maquettes HD',
					'Prototype interactif complet',
					'Design system (composants + guidelines)',
					'Test utilisateur (5 participants)',
					'Révisions illimitées'
				]
			}
		]
	},
	{
		id: 14,
		title: "Illustration numérique personnalisée",
		picture: '/front-end/assets/pictures/service2.png',
		rating: 4.9,
		reviews: 145,
		currency: 'XAF',
		category: 'Design & Création',
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
			pseudo: '@artDigital',
			profilePicture: '/front-end/assets/pictures/anonyme.svg',
			profession: 'Illustrateur Digital'
		},

		packs: [
			{
				name: 'Pack Basic',
				price: 60000,
				delivery: '4 jours',
				features: [
					'1 illustration',
					'1 personnage ou objet',
					'Fond simple',
					'2 révisions',
					'Format HD (2000x2000px)'
				]
			},
			{
				name: 'Pack Premium',
				price: 180000,
				delivery: '10 jours',
				features: [
					'Scène complète avec décor',
					'Jusqu\'à 3 personnages',
					'Palette de couleurs personnalisée',
					'Révisions illimitées',
					'Déclinaisons réseaux sociaux',
					'Formats print & web inclus'
				]
			}
		]
	},

	// ==================== CATEGORIE 3 : MARKETING DIGITAL ====================
	{
		id: 8,
		title: "SEO : Référencement Google",
		picture: '/front-end/assets/pictures/service1.png',
		rating: 4.6,
		reviews: 178,
		currency: 'XAF',
		category: 'Marketing Digital',
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
			pseudo: '@seoExpert',
			profilePicture: '/front-end/assets/pictures/profil1.jpg',
			profession: 'Référenceur Web'
		},

		packs: [
			{
				name: 'Pack Basic',
				price: 150000,
				delivery: '7 jours',
				features: [
					'Audit technique complet',
					'Rapport détaillé avec recommandations',
					'Analyse des concurrents',
					'Plan d\'action priorisé'
				]
			},
			{
				name: 'Pack Premium',
				price: 300000,
				delivery: '30 jours',
				features: [
					'Audit complet + mise en œuvre',
					'Optimisation on-page (jusqu\'à 20 pages)',
					'Netlinking (10 backlinks qualité)',
					'Google Search Console intégré',
					'Rapport mensuel de progression',
					'Support 3 mois inclus'
				]
			}
		]
	},
	{
		id: 9,
		title: "Rédaction d'articles SEO",
		picture: '/front-end/assets/pictures/service2.png',
		rating: 4.8,
		reviews: 892,
		currency: 'XAF',
		category: 'Marketing Digital',
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
			pseudo: '@redacPro',
			profilePicture: '/front-end/assets/pictures/profil1.jpg',
			profession: 'Rédacteur Web'
		},

		packs: [
			{
				name: 'Pack Basic',
				price: 20000,
				delivery: '2 jours',
				features: [
					'Article de 800 mots',
					'Recherche de 5 mots-clés',
					'Structure Hn optimisée',
					'2 révisions offertes'
				]
			},
			{
				name: 'Pack Premium',
				price: 40000,
				delivery: '4 jours',
				features: [
					'Article de 1500 mots',
					'Recherche complète de mots-clés',
					'Structure avancée + FAQ',
					'Images libres de droits intégrées',
					'Méta-description optimisée',
					'Révisions illimitées'
				]
			}
		]
	},
	{
		id: 10,
		title: "Rédaction de pages de vente",
		picture: '/front-end/assets/pictures/service1.png',
		rating: 4.8,
		reviews: 423,
		currency: 'XAF',
		category: 'Marketing Digital',
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
			pseudo: '@copywriter',
			profilePicture: '/front-end/assets/pictures/anonyme.svg',
			profession: 'Copywriter'
		},

		packs: [
			{
				name: 'Pack Basic',
				price: 100000,
				delivery: '3 jours',
				features: [
					'Page de vente complète',
					'Recherche du persona cible',
					'1 version avec 2 révisions',
					'Optimisation SEO basique'
				]
			},
			{
				name: 'Pack Premium',
				price: 200000,
				delivery: '7 jours',
				features: [
					'Tunnel complet (page de vente + relances email)',
					'Recherche approfondie',
					'2 versions avec test A/B',
					'Script vidéo de vente offert',
					'Séquence email (5 emails)',
					'Suivi des conversions sur 1 mois'
				]
			}
		]
	},

	// ==================== CATEGORIE 4 : DATA & IA ====================
	{
		id: 11,
		title: "Analyse de données avec Python",
		picture: '/front-end/assets/pictures/service1.png',
		rating: 5.0,
		reviews: 45,
		currency: 'XAF',
		category: 'Data & IA',
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
			pseudo: '@dataGuru',
			profilePicture: '/front-end/assets/pictures/anonyme.svg',
			profession: 'Data Analyst'
		},

		packs: [
			{
				name: 'Pack Basic',
				price: 400000,
				delivery: '5 jours',
				features: [
					'Analyse exploratoire complète',
					'Visualisations statiques (matplotlib/seaborn)',
					'Rapport Jupyter Notebook',
					'Recommandations basiques'
				]
			},
			{
				name: 'Pack Premium',
				price: 800000,
				delivery: '10 jours',
				features: [
					'Dashboard interactif complet',
					'Modèle ML prédictif (régression/classification)',
					'Pipeline de données automatisé',
					'Rapport détaillé + présentation',
					'Support technique 1 mois',
					'Formation utilisateur (2h)'
				]
			}
		]
	},
	{
		id: 12,
		title: "Chatbot intelligent avec IA",
		picture: '/front-end/assets/pictures/service2.png',
		rating: 4.9,
		reviews: 38,
		currency: 'XAF',
		category: 'Data & IA',
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
			pseudo: '@aiBuilder',
			profilePicture: '/front-end/assets/pictures/profil1.jpg',
			profession: 'Ingénieur IA'
		},

		packs: [
			{
				name: 'Pack Basic',
				price: 350000,
				delivery: '10 jours',
				features: [
					'Chatbot FAQ (questions/réponses)',
					'Jusqu\'à 50 intentions',
					'Intégration 1 canal',
					'Interface d\'administration',
					'Statistiques de base'
				]
			},
			{
				name: 'Pack Premium',
				price: 900000,
				delivery: '25 jours',
				features: [
					'Chatbot NLP avancé (compréhension contextuelle)',
					'Intentions illimitées',
					'Intégration multi-canal (3 canaux)',
					'Transfert humain intelligent',
					'Analyse sémantique & sentiments',
					'Maintenance & amélioration continue 2 mois'
				]
			}
		]
	},
	{
		id: 13,
		title: "Automatisation de rapports avec Power BI",
		picture: '/front-end/assets/pictures/service1.png',
		rating: 4.8,
		reviews: 72,
		currency: 'XAF',
		category: 'Data & IA',
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
			pseudo: '@biExpert',
			profilePicture: '/front-end/assets/pictures/anonyme.svg',
			profession: 'Consultant BI'
		},

		packs: [
			{
				name: 'Pack Basic',
				price: 250000,
				delivery: '8 jours',
				features: [
					'1 dashboard Power BI',
					'Jusqu\'à 3 sources de données',
					'5 KPIs',
					'Mise à jour manuelle',
					'Documentation utilisateur'
				]
			},
			{
				name: 'Pack Premium',
				price: 650000,
				delivery: '18 jours',
				features: [
					'Dashboard complet multi-pages',
					'Sources de données illimitées',
					'KPIs & alertes personnalisées',
					'Mise à jour automatique programmée',
					'Sécurité Row-Level intégrée',
					'Formation équipe (4h)',
					'Support prioritaire 2 mois'
				]
			}
		]
	}
];

//simulation des categories
const categories = [
  {
    id: 1,
    name: "Développement",
    slug: "developpement",
    count: 0,              // ← sera calculé par Django
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-xml-icon lucide-code-xml"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>',              // ← tu remplaceras par le SVG
  },
  {
    id: 2,
    name: "Design & Création",
    slug: "design-creation",
    count: 0,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palette-icon lucide-palette"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/></svg>',
  },
  {
    id: 3,
    name: "Marketing Digital",
    slug: "marketing-digital",
    count: 0,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-combined-icon lucide-chart-no-axes-combined"><path d="M12 16v5"/><path d="M16 14.639V21"/><path d="M20 10.656V21"/><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"/><path d="M4 18.463V21"/><path d="M8 14.656V21"/></svg>',
  },
  {
    id: 4,
    name: "Data & IA",
    slug: "data-ia",
    count: 0,
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database-zap-icon lucide-database-zap"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 15 21.84"/><path d="M21 5V8"/><path d="M21 12L18 17H22L19 22"/><path d="M3 12A9 3 0 0 0 14.59 14.87"/></svg>',
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
