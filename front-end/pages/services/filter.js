document.addEventListener('DOMContentLoaded', () => {
	EventShowDetailFilter();
});
function EventShowDetailFilter() {
	const filter_items_detail = [
		{ item: 'categorie-filter', detail_item: 'categorie-detail' },
		{ item: 'delai-filter', detail_item: 'delai-detail' },
		{ item: 'note-filter', detail_item: 'note-detail' },
		{ item: 'trie-filter', detail_item: 'trie-detail' },
	];

	filter_items_detail.forEach(({ item, detail_item }) => {
		let show = false;
		document.getElementById(item).addEventListener('click', () => {
			document.getElementById(detail_item).style.display = show? "none" : "block";
			show = !show;
		});
	});
}
