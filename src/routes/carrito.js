// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Require's Controllers************
const carritoController = require('../controller/carritoController')

/*** CARRITO ***/ 
router.get('/', carritoController.carrito);
router.post('/', carritoController.carrito);

module.exports = router;
