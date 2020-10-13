'use strict';

const express = require("express");
const router = express.Router();

const checkAuth = require('../middleware/check_auth');
const googleApiController = require('../controllers/google_controller');

router.get('/api/googlesearch/:query', checkAuth, googleApiController.getGoogleResponse);

module.exports = router;
