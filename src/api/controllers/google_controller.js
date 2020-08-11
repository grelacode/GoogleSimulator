'use strict';

const GoogleApiService = require('../services/google_api_service');
const httpCodes = require('../constants/http_codes');

class googleApiController {

	 static async getGoogleResponse(req, res) {

		try {
			const googleResponse = await GoogleApiService.getGoogleResponse(req.params.query);
			const googleResponseItems = await GoogleApiService.getGoogleResponseItems(googleResponse);
			const googleResponseItemsMapped = await GoogleApiService.mappingGoogleResponse(googleResponseItems);
			res.status(httpCodes.SUCCESS).json(googleResponseItemsMapped)
		} catch (error) {
			res.status(httpCodes.SERVICE_UNAVAILABLE);
		}
	}

}

module.exports = googleApiController;


