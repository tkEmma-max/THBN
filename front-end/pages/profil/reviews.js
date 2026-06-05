import { getMyReviews } from "../../api/reviewsApi.js";
import { renderReviews } from "../../components/review-card/review-card.js";

document.addEventListener("DOMContentLoaded", async () => {
  const reviews = await getMyReviews();
  renderReviews(reviews, 'my-reviews-container');
});