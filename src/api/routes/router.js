'use strict';
const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const checkauth = require('../middleware/check-auth');
const pinController = require('../controllers/pin');
const searchController = require('../googlesearch/makeRequest');

router.get('/api/pins/:pin', checkauth, pinController);

router.get('/api/dametoken', (req, res) => {
    const token = jwt.sign(
        {
            "testing": "testing"
        },
        process.env.JWT_KEY,
        {
            expiresIn: "24h"
        }
    );
    res.status(200).json({
        token
    });
});

router.get('/api/googleSearch/:search',checkauth, searchController);

module.exports = router;
