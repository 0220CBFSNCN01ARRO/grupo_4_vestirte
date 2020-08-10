// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Require's Controllers************
const carritoController = require('../controller/carritoController')

/*** CARRITO ***/ 
router.get('/', carritoController.carrito);

module.exports = router;
