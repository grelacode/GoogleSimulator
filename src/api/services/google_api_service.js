'use strict';

const GoogleApiClient = require('../clients/google_api_client');

class GoogleApiService {

	constructor(userQuery) {
		this.userQuery = userQuery;
	}

	async getGoogleResponse(userQuery) {

		const googleApiClient =  new GoogleApiClient(userQuery);

		try {
			const googleApiClientResponse =  await googleApiClient.getGoogleResponse();
			return googleApiClientResponse;
		} catch (error) {
			throw new Error(error.message);
		}

	}

	async getGoogleResponseItems(googleResponse) {

		try {
			const googleResponseItems = await googleResponse.items;
			if (googleResponseItems) {
				return googleResponseItems;
			} else {
				throw new Error(googleResponse.error.message);
			}
		} catch (error) {
			throw new Error(error.message);
		}

	}

	async mappingGoogleResponse(googleResponseItems) {

		let mappedGoogleResponse = [];

		googleResponseItems.map(item => {
			mappedGoogleResponse.push ({
					"title": item.title,
					"displayLink": item.displayLink,
					"imageURL": item.link,
					"imageThumbnail": item.image.thumbnailLink
				});
		});

		try {
			return mappedGoogleResponse;
		} catch (error) {
			throw new Error(error.message);
		}

	}

}

module.exports = GoogleApiService;
