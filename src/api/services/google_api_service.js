'use strict';

const GoogleApiClient = require('../clients/google_api_client');

class GoogleApiService {

	static async getGoogleResponse(userQuery) {

		try {
			const googleApiClient =  new GoogleApiClient(userQuery);
			const googleApiClientResponse =  await googleApiClient.getGoogleResponse();
			return googleApiClientResponse;
		} catch (error) {
			throw new Error(error.message);
		}
	}

  	static async getGoogleResponseItems(googleResponse) {

 	 	try {
 	 		const googleResponseItems = await googleResponse.items;
 	 		return googleResponseItems;
 	 	} catch (error) {
 	 		throw new Error(error.message);
 	 	}
	}

	static async mappingGoogleResponse(googleResponseItems) {

		try {
			const mappedGoogleResponseItems =  googleResponseItems.map(item => {
				let cleanGoogleResponse = {
					"title": item.title,
					"displayLink": item.displayLink,
					"imageURL": item.link,
					"imageThumbnail": item.image.thumbnailLink
				}
				return cleanGoogleResponse
			})
			return mappedGoogleResponseItems;
		} catch (error) {
			throw new Error(error.message);
		}
	}

}

module.exports = GoogleApiService;
