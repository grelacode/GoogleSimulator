'use strict';

const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check_auth');
const PinController = require('../controllers/pin_controller');
const googleApiController = require('../controllers/google_controller');

router.get('/api/googlesearch/:query',checkAuth, googleApiController.getGoogleResponse);

/*
deprecated route
router.get('/api/validatepin/:pin', checkAuth, async (req, res) => {
    try {
        const resultCheckPin = await PinController.checkUserPin(req.params.pin);
        res.status(httpCodes.SUCCESS).json(resultCheckPin);
    } catch (error) {
        res.status(httpCodes.BAD_REQUEST).json({error: true, message: error.message});
    }
});
*/

module.exports = router;
