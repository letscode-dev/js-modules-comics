import { getDataApi } from '../../utils/getDataApi';
import { IMG_STANDARD_XLARGE } from '../../constants/api';
import { ROOT_MODAL } from '../../constants/root';

import Notification from '../Notification';

import classes from './Characters.css';

import imgCloseWhite from './img/close-white.svg';

class Characters {
    renderContent(data) {
        let htmlContent = '';

        data.forEach(({ name, thumbnail: { path, extension } }) => {
            const imgSrc = path + '/' + IMG_STANDARD_XLARGE + '.' + extension;

            htmlContent += `
                <li class="${classes.characters__item}">
                    <img class="img-cover ${classes.characters__img}" src="${imgSrc}" />
                    <span class="${classes.characters__name}">${name}</span>
                </li>
            `;
        });

        const htmlWrapper = `
            <div class="${classes.wrapper}">
                <ul class="${classes.characters__container}">
                    ${htmlContent}
                </ul>
                <button
                    class="btn bg-contain ${classes.characters__close}"
                    onclick="modal.innerHTML = ''"
                    style="background-image: url(${imgCloseWhite})"
                ></button>
            </div>
        `;

        ROOT_MODAL.innerHTML = htmlWrapper;
    }

    async render(uri) {
        const data = await getDataApi.getData(uri);

        data.length ? this.renderContent(data) : Notification.render();
    }
}

export default new Characters();
