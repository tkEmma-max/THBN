import { renderServices } from '/front-end/pages/services/services.js';
import { fillServiceTemplate } from '/front-end/pages/services/services.js';
import { getServices, getCategories } from '/front-end/api/servicesApi.js';

//import { getCategories } from '/front-end/pages/services/services.js';

//const categories = getCategories();
//alert(categories.length);

document.addEventListener('DOMContentLoaded', () => {
	EventShowDetailFilter();
	fillCategories(getCategories(), 'categorie-detail-list');
	AllFilterEventListener(getServices());
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
			detailElement.style.display =
				detailElement.style.display === 'block' ? 'none' : 'block';
			currentOpen =
				detailElement.style.display === 'block' ? detailElement : null;
		});
	});

	// Ferme tout quand on clique ailleurs
	document.addEventListener('click', e => {
		if (!e.target.closest('.filter-item-group')) {
			filter_items_detail.forEach(({ detail_item }) => {
				document.getElementById(detail_item).style.display = 'none';
			});
			currentOpen = null;
		}
	});
}

//fonction de remplissage dynamique de la liste des categories
function fillCategories(categories, selector) {
	const categories_list = document.getElementById(selector);
	if (categories_list) {
		categories_list.innerHTML = ''; //netoyage des elements avant le remplissage
		categories.forEach(categorie => {
			const li = document.createElement('li');
			li.textContent = categorie.name;
			li.id = categorie.name.toLowerCase().replace(" ", "-");
			categories_list.appendChild(li);
		});
	}
}

function filterServices(services, options = {}) {
	let newServices = [...services];
	const { category, delai_min, delai_max, rating } = options;

	//filtre en fonction de la note
	if (rating) {
		newServices = newServices.filter(s => s.rating >= rating);
	}

	//filtre en fonction de la categorie
	if (category) {
		newServices = newServices.filter(s => s.category === category);
	}

	//filtre en fonction du delai
	if (delai_min && delai_max) {
		newServices = newServices.filter(s => {
			const deliveryTime = parseInt(
				s.packs.find(pack => pack.name.toLowerCase() === 'pack basic')
					.delivery
			);
			return deliveryTime >= delai_min && deliveryTime <= delai_max;
		});
	}
//	alert(`${newServices.length} services found after filtering`);
	return newServices;
}

function getInfosFilters() {
	const delai_min_input = document.getElementById('delai-min');
	const delai_max_input = document.getElementById('delai-max');
	const note_input = document.getElementById('note');
	const delai_min = parseInt(delai_min_input?.value) || 0;
	const delai_max = parseInt(delai_max_input?.value) || 100;
	const rating = parseFloat(note_input?.value) || 0;
	return { delai_min, delai_max, rating };
}

function makeFilterEventListener(services, filterOptions = {}) {
	const { triggerId, targetId, autherSourceValue, sourceMotif } =
		filterOptions;
	//alert(
	//	`making event listener with options: ${JSON.stringify(filterOptions)}`);
	const trigger = document.getElementById(triggerId);
	let source = {};

	if (!trigger || !targetId) {
		return;
	}
	trigger.addEventListener('click', () => {
		if (!autherSourceValue || !sourceMotif) {
			source = getInfosFilters();
		} else {
			source = getInfosFilters();
			source[sourceMotif] = autherSourceValue;
			//alert(`motif source: ${source[sourceMotif]}`);
			//alert(JSON.stringify(source));
		}

	//	alert(`${triggerId} clicked with source: ${JSON.stringify(source)}`);
		let servicesFiltered = filterServices(services, source);
		renderServices(servicesFiltered, targetId);
	});
}

function AllFilterEventListener(services) {
	const delai_trigger = 'filter-delai-button';
	const note_trigger = 'filter-note-button';
	const categories_trigger = document.getElementById(
		'categorie-detail-list'
	).children;
	const targetId = 'all-services';

	makeFilterEventListener(services, {
		triggerId: delai_trigger,
		targetId: targetId
	});

	makeFilterEventListener(services, {
		triggerId: note_trigger,
		targetId: targetId
	});

	if (categories_trigger) {
		Array.from(categories_trigger).forEach(categorie => {
			makeFilterEventListener(services, {
				triggerId: categorie.id,
				targetId: targetId,
				autherSourceValue: categorie.textContent,
				sourceMotif: 'category'
			});
		});
	}
}
