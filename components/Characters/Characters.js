import { getDataApi } from '/api/getDataApi';
import { URL_CHARACTERS, IMG_STANDARD_XLARGE } from '/constants/api';
import { nativeDOM } from '/utils/nativeDOM';

import Character from '/components/Character';

import './Characters.css';

const Characters = async () => {
	const data = await getDataApi.getData(URL_CHARACTERS);

	const wrapper = nativeDOM.createElement('ul', { 'class': 'characters-container' });

	data.forEach(element => {

		const liListener = {
			action: 'click',
			listener: function(id) {
				Character(id);
			},
			params: [element.id]
		};

		const li = nativeDOM.createElement('li', { 'class': 'characters-item' }, null, liListener);
		const span = nativeDOM.createElement('span', { 'class': 'characters-name' }, element.name);

		const imageNotAvailable = 'image_not_available';

		if (element.thumbnail.path.lastIndexOf(imageNotAvailable) === -1) {
			const imgPath = element.thumbnail.path;
			const imgExtension = element.thumbnail.extension;
			const imgSrc = imgPath + IMG_STANDARD_XLARGE + "." + imgExtension;
			const img = nativeDOM.createElement('img', { 'class': 'characters-image', 'src': imgSrc });

			li.appendChild(span);
			li.appendChild(img);

			wrapper.appendChild(li);
		}
	});

	return wrapper;
};

export default Characters;
