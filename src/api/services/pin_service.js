'use strict';

const PinModel = require('../models/pin_model');

class pinService {
    static async pinValidate(insertedPin) {

        if(insertedPin.length !== 3) {
            return "The inserted pin is incorrect."
        }

        try {
            PinModel.findAll({
                where: {
                  pin: insertedPin
                }
              });
        } catch {
            throw new error ("The inserted pin is incorrect.");
        }          
    }
}
