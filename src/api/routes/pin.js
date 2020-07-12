
'use strict';

const express = require("express");
const router = express.Router();
const checkauth = require('../middleware/check-auth')
const pincontroller = require('../controllers/pin');


router.get('/', checkauth, pincontroller);



module.exports = router;




