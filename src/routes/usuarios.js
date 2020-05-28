// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Require's Controllers************
const userController = require('../controller/userController.js')

/*** LOGIN DE USER ***/
router.get('/login', userController.login)
router.get('/registro', userController.registro)

module.exports = router;
