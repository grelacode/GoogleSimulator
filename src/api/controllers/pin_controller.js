'use strict';
const pinDb = require('../models/pin_model2');

const httpCodes = require('../constants/http_codes')

async function checkUserPin(req, res) {
    try {
        const getUserData = await pinservices.validate(req.res);
        res.status(200).json({
            pinValidate
        })
    } catch(error) {

    }
}

class PinController {

    static async checkUserPin(pinReceived) {

        if (pinReceived.length !== 3) {
            return "invalid pin"
        }

        try {
            const found = await pinDb.find(user => user.pin === pinReceived);
            return found.magicTrick
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = PinController;
