//this a similation of an api call to get the portfolio data of a user, in a real application this would be replaced with an actual API call to the backend
//simulated portfolio data

const portfolio = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Boutique en ligne complète avec React et Django REST",
    image: "/front-end/assets/pictures/port1.png",
    url: "https://example-shop.com",
    completed_at: "2025-11-20"
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Tableau de bord interactif avec Chart.js et API REST",
    image: "/front-end/assets/pictures/port2.png",
    url: "https://analytics-demo.com",
    completed_at: "2025-08-15"
  },
  {
    id: 3,
    title: "Application Mobile",
    description: "App React Native pour la gestion de tâches",
    image: "/front-end/assets/pictures/port3.png",
    url: null,
    completed_at: "2025-05-10"
  }
];

//function to simulate an API call to get the portfolio data
export function getMyPortfolio() {
    return portfolio;  
}