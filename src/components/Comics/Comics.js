import { getDataApi } from '../../utils/getDataApi';
import { URL_COMICS, IMG_STANDARD_XLARGE } from '../../constants/api';
import { ROOT_INDEX } from '../../constants/root';

import Characters from '../Characters';

import './Comics.css';

class Comics {
	async render() {
		const data = await getDataApi.getData(URL_COMICS);

		let htmlContent = '';

		data.forEach(({ title, thumbnail: { path, extension }, characters: { collectionURI } }) => {

			if (path.lastIndexOf('image_not_available') === -1) {
				const imgSrc = path + IMG_STANDARD_XLARGE + "." + extension;

				htmlContent += `
					<li class="comics__item" data-uri="${collectionURI}">
						<span class="comics__name">${title}</span>
						<img class="img-contain comics__image" src="${imgSrc}" />
					</li>
				`;
			}
		});

		const htmlWrapper = `
			<ul class="comics__container">
				${htmlContent}
			</ul>
		`;

		ROOT_INDEX.innerHTML = htmlWrapper;
	}

	eventListener() {
		document.querySelectorAll('.comics__item').forEach(element => {
			const uri = element.getAttribute('data-uri');

			element.addEventListener('click', () => {
				Characters.render(uri);
			})
		})
	}
}

export default new Comics();
