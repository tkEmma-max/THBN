import { getCategories } from "/front-end/api/servicesApi.js";


document.addEventListener("DOMContentLoaded", async () => {
try {
    const categories = await getCategories()
    renderCategories(categories, "category-template", "categories-container")
} catch (error) {
    console.error("Error fetching categories:", error)
}
});

function createCategoriesCard(template_selector, categorie){

    const template = document.getElementById(template_selector)
    const newCard = template.content.cloneNode(true)

    //selection of the elements in the template
    const icon = newCard.querySelector(".ctg-icon")
    const title = newCard.querySelector(".ctg-title")
    const count = newCard.querySelector(".ctg-count")

    //filling the elements with the data
    icon.innerHTML = categorie.icon
    title.textContent = categorie.name
    count.textContent = categorie.count + "k+ talents"

    return newCard;
}

function renderCategories(categories, template_selector, container_selector){
    const container = document.getElementById(container_selector)

    if (!container || !template_selector || !categories) return;

    const categoriesFragment = document.createDocumentFragment()
    
    categories.forEach(categorie => {
        const card = createCategoriesCard(template_selector, categorie)
        categoriesFragment.appendChild(card)
    })

    container.appendChild(categoriesFragment)
}
