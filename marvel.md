
//-----------------------------------------------
# css
//-----------------------------------------------

:root {
	--color-orange: #ffa500;

	--color1: #31313d;
	--color2: #315660;
	--color3: #c0c0c0;
	--color4: #808080;

	--spacing-small: 10px;
}


//-----------------------------------------------
# package.json
//-----------------------------------------------

{
	"name": "marvel",
	"version": "1.0.0",
	"scripts": {
		"start": "parcel public/index.html --open",
		"build": "parcel build public/index.html"
	},
	"dependencies": {
		"axios": "^0.19.0",
		"regenerator-runtime": "^0.13.7"
	},
	"devDependencies": {
		"@babel/core": "^7.11.0",
		"parcel-bundler": "^1.6.1"
	}
}


//-----------------------------------------------
# api
//-----------------------------------------------

// https://developer.marvel.com/docs

export const API_KEY = 'a5837db97d72016c81a7a776f4240db9';

const API_URL = 'https://gateway.marvel.com/v1/public/';

export const URL_CHARACTERS = API_URL + 'characters';
export const URL_COMICS = API_URL + 'comics';
export const URL_CREATORS = API_URL + 'creators';
export const URL_EVENTS = API_URL + 'events';
export const URL_SERIES = API_URL + 'series';
export const URL_STORIES = API_URL + 'stories';

export const IMG_STANDARD_XLARGE = '/standard_xlarge';
export const IMG_STANDARD_SMALL = '/standard_small';


// 'comics/'+url
// 'comics/'+url+'/characters'
// 'characters/'+id

// characters?
    // name=Wolverine

// comics?
    // &apikey=cb6378a5a3f12f56c38a8325fbfa0dcb'
    // &limit=100
    // &format=comic
    // &formatType=comic
    // &noVariants=true
    // &characters=1009187
    // &offset=0


