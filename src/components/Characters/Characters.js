import { getDataApi } from '../../utils/getDataApi';
import { IMG_STANDARD_XLARGE } from '../../constants/api';
import { ROOT_MODAL } from '../../constants/root';

import './Characters.css';

import imgCloseWhite from './img/close-white.svg';
import imgCloseBlack from './img/close-black.svg';

class Characters {
    renderContent(data) {
        let htmlContent = '';

        data.forEach(({ name, thumbnail: { path, extension } }) => {
            const imgSrc = path + IMG_STANDARD_XLARGE + "." + extension;

            htmlContent += `
                <li class="characters__item">
                    <img class="img-cover characters__image" src="${imgSrc}" />
                    <span class="characters__name">${name}</span>
                </li>
            `;
        });

        const htmlWrapper = `
            <div class="characters">
                <ul class="characters__container">
                    ${htmlContent}
                </ul>
                <button
                    class="btn bg-contain characters__close"
                    onclick="modal.innerHTML = ''"
                    style="background-image: url(${imgCloseWhite})"
                ></button>
            </div>
        `;

        ROOT_MODAL.innerHTML = htmlWrapper;
    }

    renderNotification() {
        const htmlWrapper = `
            <div class="characters-alert">
                <span>Нет контента</span>
                <button
                    class="btn bg-contain characters-alert__close"
                    onclick="modal.innerHTML = ''"
                    style="background-image: url(${imgCloseBlack})"
                ></button>
            </div>
        `;

        ROOT_MODAL.innerHTML = htmlWrapper;
    }

    async render(uri) {
        const data = await getDataApi.getData(uri);

        data.length ? this.renderContent(data) : this.renderNotification();
    }
}

export default new Characters();
