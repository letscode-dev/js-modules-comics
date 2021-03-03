import axios from 'axios';
import { API_KEY } from '../constants/api';

class GetDataApi {
	async getData(url) {
		const response = await axios.get(url, {
			params: {
				apikey: API_KEY,
				limit: 100
			}
		});
		return response.data.data.results;
	}
}

export const getDataApi = new GetDataApi();
