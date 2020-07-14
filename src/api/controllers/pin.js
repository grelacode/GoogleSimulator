'use strict';

const { length } = require('superstruct');
const pindb = require('../models/fakepin')

const pinController = (req, res) => {
    const userPin = req.body.pin;
    const found = pindb.pins.find(pin => pin === userPin);

    if (!found) {
        return res.status(400).json({
            error: {
                message: "incorrect pin"
            }
        });
    }

    const data = {
        linkname: "perros y gatos",
        url: "https://perros.com/gatos"
    }
    
    res.status(200).json({
        data
    });
}

module.exports = pinController;