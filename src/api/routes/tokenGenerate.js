'use strict';

const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.get('/dametoken', (req, res) => {
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
    console.log(token);
});

 module.exports = router;