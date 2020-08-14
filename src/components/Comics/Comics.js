import { API_URL, URL_COMICS, URL_CHARACTERS, IMG_STANDARD_XLARGE, IMG_NOT_AVAILABLE } from '../../constants/api';
import { getDataApi } from '../../utils/getDataApi';
import { ROOT_INDEX } from '../../constants/root';

import './Comics.css';

class Comics {
    async render() {
        const data = await getDataApi.getData(API_URL + URL_COMICS);

        let htmlContent = '';

        data.forEach(({ id, title, thumbnail: { path, extension } }) => {
            
            if (path.lastIndexOf(IMG_NOT_AVAILABLE) === -1) {
                const uri = API_URL + URL_COMICS + '/' + id + '/' + URL_CHARACTERS;
                const imgSrc = path + '/' + IMG_STANDARD_XLARGE + '.' + extension;

                htmlContent += `
                    <li class="comics__item" data-uri="${uri}">
                        <span class="comics__name">${title}</span>
                        <img class="comics__img" src="${imgSrc}" />
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
                console.log(uri);
            })
        })
    }
}

export default new Comics();
