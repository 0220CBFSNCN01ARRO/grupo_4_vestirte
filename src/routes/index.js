// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Require's Controllers************
const indexController = require('../controller/indexController')

/*** INDEX ***/ 
router.get('/', indexController.root); 

module.exports = router;
