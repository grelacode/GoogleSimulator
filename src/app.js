'use strict';
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const httpCodes = require('./api/constants/http_codes');
require('dotenv').config()
const routes = require("./api/routes/router");

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Accept,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", routes);

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = httpCodes.NOT_FOUND;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || httpCodes.INTERNAL_SERVER_ERROR);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
