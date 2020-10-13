

const GoogleApiService = require('../services/google_api_service');
const httpCodes = require('../constants/http_codes');

class GoogleApiController {

	static async getGoogleResponse(req, res) {

		let googleResponse;
		let googleResponseItems;
		let googleResponseItemsMapped;

		const newGoogleService = new GoogleApiService(req.params.query);

		try {
			googleResponse = await newGoogleService.getGoogleResponse(req.params.query);
		} catch (error) {
			return res.status(httpCodes.SERVICE_UNAVAILABLE).json(error.message)
		}

		try {
			googleResponseItems = await newGoogleService.getGoogleResponseItems(googleResponse);
		} catch (error) {
			return res.status(httpCodes.SERVICE_UNAVAILABLE).json(error.message)
		}

		try {
			googleResponseItemsMapped = await newGoogleService.mappingGoogleResponse(googleResponseItems);
		} catch (error) {
			return res.status(httpCodes.INTERNAL_SERVER_ERROR).json(error.message)
		}

		try {
			res.status(httpCodes.SUCCESS).json(googleResponseItemsMapped);
		} catch (error) {
			return res.status(httpCodes.SERVICE_UNAVAILABLE).json(error.message);
		}

	}

}

module.exports = GoogleApiController;


