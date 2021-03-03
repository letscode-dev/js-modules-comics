import { getDataApi } from '/api/getDataApi';
import { URL_CHARACTERS } from '/constants/api';

import './Character.css';

const CharacterComicsList = ({available, items}) => {
    if (!available) {
        return '';
    }

    const result = items
        .map((element) => '<li>'+element.name+'</li>')
        .reduce((previousValue, currentValue) => previousValue + currentValue);

    return `<ul>${result}</ul>`;
}

const Character = async id => {
    const data = await getDataApi.getData(URL_CHARACTERS + '/' + id);
    const { name, description, thumbnail, comics } = data[0];

    const html = `
        <div class="character__wrapper">
            <div class="character__container">
                <img class="character__container_img" src="${thumbnail.path + '.' + thumbnail.extension}">
                <h2 class="character__container_name">${name}</h2>
                <p class="character__container_description">${description}</p>
                ${CharacterComicsList(comics)}
            <div>
        </div>
    `;

    const root = document.getElementById('root');
    root.innerHTML = html;
};

export default Character;



