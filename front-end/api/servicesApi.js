/*   ce module permet de definir lensemble des fonctions
permetant de::
//    recuperer tous les serviced 
//    recuperer un service particulier 
//    enregistrer un service
*/

//données simuler des services

const services = [
	{
		picture: null,
		profil: '/front-end/assets/pictures/profil1.jpg',
		pseudo: '@desigMaster',
		profession: 'designer',
		title: "creation d'Application Web",
		price: '500',
		delivery: '7',
		note: 1.5,
		avis: 100
	},
	{
		picture: '/front-end/assets/pictures/service1.png',
		profil: '/front-end/assets/pictures/anonyme.svg',
		pseudo: '@backendMaster',
		profession: 'devlopper web fullstack',
		title: 'develloppement de server backend avec python',
		price: '500000',
		delivery: '7',
		note: 2,
		avis: 100
	},/*
	{
		picture: '/front-end/assets/pictures/service1.png',
		profil: '/front-end/assets/pictures/profil1.jpg',
		pseudo: '@desigMaster',
		profession: 'designer',
		title: "creation d'Application Web",
		price: '500',
		delivery: '7',
		note: 3,
		avis: 100
	},
	{
		picture: '/front-end/assets/pictures/service1.png',
		profil: '/front-end/assets/pictures/anonyme.svg',
		pseudo: '@desigMaster',
		profession: 'designer',
		title: 'creation de logo personalié',
		price: '500',
		delivery: '7',
		note: 4.5,
		avis: 100
	},
	{
		picture: '/front-end/assets/pictures/service2.png',
		profil: '/front-end/assets/pictures/profil1.jpg',
		pseudo: '@desigMaster',
		profession: 'designer',
		title: "creation d'Application Web",
		service_picture: './service1.png',
		price: '500',
		delivery: '7',
		note: 5,
		avis: 100
	},
	{
		picture: '/front-end/assets/pictures/service1.png',
		profil: '/front-end/assets/pictures/anonyme.svg',
		pseudo: '@desigMaster',
		profession: 'designer',
		title: 'montagd de videos avec capcut pro',
		service_picture: './service2.png',
		price: '500',
		delivery: '7',
		note: 4.5,
		avis: 100
	},
	{
		picture: '/front-end/assets/pictures/service2.png',
		profil: '/front-end/assets/pictures/profil1.jpg',
		pseudo: '@desigMaster',
		profession: 'designer',
		title: "creation d'Application Web",
		service_picture: './service1.png',
		price: '500',
		delivery: '7',
		note: 4.5,
		avis: 100
	},
	{
		picture: '/front-end/assets/pictures/service2.png',
		profil: '/front-end/assets/pictures/anonyme.svg',
		pseudo: '@desigMaster',
		profession: 'designer',
		title: "creation d'Application Web",
		service_picture: './service2.png',
		price: '500',
		delivery: '7',
		note: 4.5,
		avis: 100
	}*/
];

export function getServices() {
	return services;
}
