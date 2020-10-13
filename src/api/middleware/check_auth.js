'use strict';

const jwt = require('jsonwebtoken');
const httpCodes = require('../constants/http_codes');

const checkAuth = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        next();
    } catch (error) {
        return res.status(httpCodes.UNAUTHORIZED).json({
            message: error.message
        });
    }

}

module.exports = checkAuth;
