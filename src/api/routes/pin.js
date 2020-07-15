
'use strict';

const express = require("express");
const router = express.Router();
const checkauth = require('../middleware/check-auth');
const pinController = require('../controllers/pin');

router.get('/:pin', checkauth, pinController);

module.exports = router;




