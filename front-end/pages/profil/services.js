import { getMyServices } from "../../api/servicesApi.js";
import { renderServices } from "../../components/service-card/service_card.js";


document.addEventListener("DOMContentLoaded", async () => {
    const services = await getMyServices();
    renderServies(services, 'my-services');
});