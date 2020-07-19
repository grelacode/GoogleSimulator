'use strict';
const pindb = require('../models/fakepin');

const pinController = async (req, res) => {
    try {
        const userPin = req.params.pin
        const found = await pindb.find(user => user.pin === userPin);
        if (!found) {
            return res.status(404).json({
                message: "invalid pin"
            });
        }
        const pinData = found.forzaje;
        res.status(200).json({
            pinData
        });
    } catch {
        res.status(400).json({
            error: {
                message: "something wrong"
            }
        });
    }
}

module.exports = pinController;