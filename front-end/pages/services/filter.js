import { renderServices } from '/front-end/pages/services/services.js';
import { fillServiceTemplate } from '/front-end/pages/services/services.js';
import { getServices, getCategories } from '/front-end/api/servicesApi.js';

//import { getCategories } from '/front-end/pages/services/services.js';

//const categories = getCategories();
//alert(categories.length);

document.addEventListener('DOMContentLoaded', () => {
	EventShowDetailFilter();
	fillCategories(getCategories(), 'categorie-detail-list');
	filterCategoriesEvent(getServices(), "all-services", "categorie-detail-list");
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
			categories_list.appendChild(li);
		});
	}
}

function filterServices(services, options = {}) {
	let newServices = [...services];
	const { categorie, delai_min, delai_max, rating } = options;

	//filtre en fonction de la note
	if (rating) {
		newServices = newServices.filter(s => s.rating >= rating);
	}

	//filtre en fonction de la categorie
	if (categorie) {
alert("filtering by category")
		newServices = newServices.filter(s => s.category === categorie);
	}

	//filtre en fonction du delai
	if (delai_min && delai_max) {
		newServices = newServices.filter(s => {
			deliveryTime = s.packs.find(
				pack => pack.name.toLowerCase() === 'pack basique'
			).delivery;
			return deliveryTime >= delai_min && deliveryTime <= delai_max;
		});
	}

	return newServices;
}

function makeFilterEventListener(services, filterOptions) {
	const { triggerId, targetId, sourceId } = filterOptions;
	const trigger = document.getElementById(triggerId);
	const target = document.getElementById(targetId);
	const source = document.getElementById(sourceId);

	if (!trigger || !target) return;
	trigger.addEventListener('click', () => {
		let servicesFiltered = filterServices(services, filterOptions);
		renderServices(servicesFiltered, '.all-services');
	});
}

function AllEventFilter(services) {
	const target = 'all-services';
	if (!target) return;
	makeFilterEvent(services, {
		tiggerId: 'delai-filter',
		targetId: target,
		delai_min: 1,
		delai_max: 3
	});
	makeFilterEvent(services, {
		tiggerId: 'note-filter',
		targetId: 'note-detail',
		rating: 4
	});
}

function filterCategoriesEvent(services, selector, listSelector) {
  //recupration de la liste des categories
  const categories_list = document.querySelectorAll(`#${listSelector} li`);
  const place = document.getElementById(selector);
  if (categories_list && place) {
    categories_list.forEach((cl) => {
      cl.addEventListener("click", () => {
        renderServices(
          filterServices(services, { categorie: cl.textContent }),
          place,
        );
      });
    });
  }
}

/*


function filterDelaiEvent(services, delai_min, delai_max, buttonId, selector) {
  const button = document.getElementById(buttonId);
  const place = document.getElementById(selector);
  if (button && place) {
    button.addEventListener("click", () => {
      renderServices(
        filterServices(services, { delai_min, delai_max }),
        place,
      );
    });
  }
}

function filterRatingEvent(services, rating, buttonId) {
  const button = document.getElementById(buttonId);
  if (buttton) {
    button.addEventListener("click", () => {
      renderServices(filterServices(services, { rating }), ".all-services");
    });
}

function sortServices(services, sortBy) {
}
function sortEvent(services, sortBy, buttonId) {
}
function allEventFilter(services) {

}
*/
