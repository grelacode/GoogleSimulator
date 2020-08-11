'use strict';

const fetch = require('node-fetch');
const constants = require('../constants/google_api_constants');

class GoogleApiClient {

	constructor(userQuery) {
		this.userQuery = userQuery;
	}

	async getGoogleResponse() {
		try {
			const googleApiResponse = await fetch(`${constants.GOOGLE_API}key=${constants.GOOGLE_API_KEY}&cx=${constants.GOOGLE_API_ID}&searchType=${constants.SEARCH_TYPE}&q=${this.userQuery}&num=${constants.AMOUNT_RESULTS_DEFAULT}`);
			const googleApiResponseJson = await googleApiResponse.json();
			return googleApiResponseJson;
    } catch(error) {
			throw new Error(error.message);
		}
  	}

}

module.exports = GoogleApiClient;
