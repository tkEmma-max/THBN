import { renderPortfolios } from "../../components/portfolio-card/portfolio-card.js";
import { getMyPortfolio } from "../../api/portfolioApi.js"


document.addEventListener('DOMContentLoaded', async () => {
    const portfolios = await getMyPortfolio()
    console.log(portfolios)
    renderPortfolios(portfolios)
})