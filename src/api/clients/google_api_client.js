'use strict';

const fetch = require('node-fetch');
const constants = require('../constants/google_api_constants');

class GoogleApiClient {

	constructor(userQuery) {
		this.userQuery = userQuery;
	}

	makeFetchString() {
		const fetchString = `${constants.GOOGLE_API}key=${constants.GOOGLE_API_KEY}&cx=${constants.GOOGLE_API_ID}&searchType=${constants.SEARCH_TYPE}&q=${this.userQuery}&num=${constants.AMOUNT_RESULTS_DEFAULT}`
		return fetchString;
	}

	async getGoogleResponse() {

		try {
			const googleApiResponse = await fetch(this.makeFetchString());
			const googleApiResponseJson = await googleApiResponse.json();
			return googleApiResponseJson;
    } catch(error) {
			throw new Error(error.message);
		}

  	}

}

module.exports = GoogleApiClient;
