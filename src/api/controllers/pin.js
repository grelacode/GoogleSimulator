'use strict';

const { length } = require('superstruct');
const pindb = require('../models/fakepin')
const jwt = require('jsonwebtoken');

const pincontroller = (req, res) => {
    const userPin = req.body.pin;
    const found = pindb.pins.find(pin => pin === userPin);

    if (!found) {
        return res.status(400).json({
            ok: false,
            err: {
                message: "incorrect pin"
            }
        });
    }
    const data = {
        name: "perros y gatos",
        url: "https://perros.com/gatos"
    }

    const token = jwt.sign(
        {
            data
        },
        process.env.JWT_KEY,
        {
            expiresIn: "1h"
        }
    );
    
    res.status(200).json({
        message: "Auth successful",
        token: token
    });
}

module.exports = pincontroller;