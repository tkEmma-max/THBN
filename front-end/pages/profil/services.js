import { getMyServices } from "../../api/profilApi.js";
import { renderServices } from "../../components/service-card/service_card.js";


document.addEventListener("DOMContentLoaded", async () => {
    const services = await getMyServices();
    renderServices(services, 'my-services');
});