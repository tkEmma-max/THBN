export function createReviewCard(review, templateSelector = '#review-card-template') {
    const template = document.getElementById(templateSelector);
    const reviewCard = template.content.cloneNode(true);
    
    // Populate the review card with review data
    reviewCard.querySelector('.reviewer-name').textContent = review.reviewerName;
    reviewCard.querySelector('.review-content').textContent = review.content;
    reviewCard.querySelector('.review-date').textContent = review.date;

    return reviewCard;
}

//rendering reviews content 

export function renderReviews(reviews, containerSelector) {
    const container = document.getElementById(containerSelector);
    const fragment = document.createDocumentFragment();

    if (container){
        container.innerHTML = ''; // Clear existing content

        reviews.forEach(review => {
            const reviewCard = createReviewCard(review);
            fragment.appendChild(reviewCard);
        });
        container.appendChild(fragment);
    }

}