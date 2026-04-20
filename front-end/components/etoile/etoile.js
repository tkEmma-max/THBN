
export function note_etoile(note = 0, total = 5) {
  // Sécurité : clamp entre 0 et total
  const rating = Math.max(0, Math.min(note, total));
  
  const container = document.createElement('span');
  container.className = 'rating-stars flex-row';
  container.setAttribute('role', 'img');
  container.setAttribute('aria-label', `Note: ${rating} sur ${total}`);
  
  // SVG templates
  const fullStar = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="0">
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
    </svg>`;
    
  const halfStar = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="0">
      <defs>
        <linearGradient id="half-${Math.random().toString(36).slice(2)}">
          <stop offset="50%" stop-color="currentColor"/>
          <stop offset="50%" stop-color="transparent"/>
        </linearGradient>
      </defs>
      <path fill="url(#half-${Math.random().toString(36).slice(2)}" stroke="currentColor" stroke-width="1" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
    </svg>`;
    
  const emptyStar = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
    </svg>`;

  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.25 && rating % 1 < 0.75; // Demi si entre 0.25 et 0.75
  const emptyStars = total - fullStars - (hasHalf ? 1 : 0);

  // Ajoute étoiles pleines
  for (let i = 0; i < fullStars; i++) {
    const star = document.createElement('span');
    star.className = 'star star-full';
    star.innerHTML = fullStar;
    container.appendChild(star);
  }

  // Ajoute demi étoile si besoin
  if (hasHalf) {
    const star = document.createElement('span');
    star.className = 'star star-half';
    star.innerHTML = halfStar;
    container.appendChild(star);
  }

  // Ajoute étoiles vides
  for (let i = 0; i < emptyStars; i++) {
    const star = document.createElement('span');
    star.className = 'star star-empty';
    star.innerHTML = emptyStar;
    container.appendChild(star);
  }

  return container;
}