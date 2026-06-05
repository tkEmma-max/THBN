import { note_etoile } from '../etoile/etoile.js';

export function createReviewCard(review, templateSelector = 'review-template') {
    const template = document.getElementById(templateSelector);

    if (!template) return null; //for debugging purpose, to avoid errors if template is not found.

    const reviewCard = template.content.cloneNode(true);

    const date = new Date(review.created_at)
    const formated_date = date.toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })
    reviewCard.querySelector('.review-pseudo').textContent = review.reviewer.pseudo;
    reviewCard.querySelector('.review-comment').textContent = review.comment;
    reviewCard.querySelector('.review-date').textContent = formated_date;
    reviewCard.querySelector('.review-note-value').textContent = review.rating;
    reviewCard.querySelector('.review-profil-container img').src = review.reviewer.profilePicture;
    reviewCard.querySelector('.review-profil-container img').alt = `${review.reviewer.pseudo} profile picture`;
   
    //adding stars to the review card
    const starsContainer = reviewCard.querySelector('.review-note-star');
    const stars = note_etoile(review.rating);
    starsContainer.appendChild(stars);
    return reviewCard;
}

//rendering reviews content 

export function renderReviews(reviews, containerSelector) {
    const container = document.getElementById(containerSelector);
    const fragment = document.createDocumentFragment();

    if (container){
        container.innerHTML = ''; // Clear existing content

        reviews.forEach(review => {
            let reviewCard = createReviewCard(review);
            fragment.appendChild(reviewCard);
        });
        container.appendChild(fragment);
    }

}