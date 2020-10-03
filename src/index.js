import {
	model
} from './model';

import {
	temlates
} from './temlates';

import './styles/main.css';

const $site = document.querySelector('#site'); // $ - Обозначение DOM элемента

model.forEach(block => {
	const toHTML = temlates[block.type];
	if (toHTML) {
		$site.insertAdjacentHTML('beforeend', toHTML(block));
	}

})