document.addEventListener('DOMContentLoaded', () => {
	EventShowDetailFilter();
});

function EventShowDetailFilter() {
  const filter_items_detail = [
    { item: 'categorie-filter', detail_item: 'categorie-detail' },
    { item: 'delai-filter', detail_item: 'delai-detail' },
    { item: 'note-filter', detail_item: 'note-detail' },
    { item: 'trie-filter', detail_item: 'trie-detail' }
  ];

  let currentOpen = null;

  filter_items_detail.forEach(({ item, detail_item }) => {
    document.getElementById(item).addEventListener('click', () => {
      const detailElement = document.getElementById(detail_item);

      // Ferme l'élément actuellement ouvert s'il y en a un
      if (currentOpen && currentOpen !== detailElement) {
        currentOpen.style.display = 'none';
      }

      // Ouvre/ferme l'élément cliqué
      detailElement.style.display = detailElement.style.display === 'block' ? 'none' : 'block';
      currentOpen = detailElement.style.display === 'block' ? detailElement : null;
    });
  });

  // Ferme tout quand on clique ailleurs
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.filter-item-group')) {
      filter_items_detail.forEach(({ detail_item }) => {
        document.getElementById(detail_item).style.display = 'none';
      });
      currentOpen = null;
    }
  });
}
