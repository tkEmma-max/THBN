//here are all the functions necessary for the portfolio-card component

export function createPortfoliocard(portfolio, templateSelector = "portfolio-template"){

const template = document.getElementById(templateSelector)

if (!template) return;

let portfolio_card = template.content.cloneNode(true)

portfolio_card.querySelector('.project-image').src = portfolio.image;
portfolio_card.querySelector('.project-image').alt  = `image du portfolio ${portfolio.title}`;
portfolio_card.querySelector('.project-title').textContent = portfolio.title;
portfolio_card.querySelector('.project-description').textContent = portfolio.description;

return portfolio_card;
}


export function renderPortfolios(protfolios, placeSelector="my-portfolios-container"){
const fragment = document.createDocumentFragment();
const place = document.getElementById(placeSelector)

if (!place) return;

protfolios.forEach((portfolio) => {
let element = createPortfoliocard(portfolio)
fragment.appendChild(element)
});

place.appendChild(fragment);
}
