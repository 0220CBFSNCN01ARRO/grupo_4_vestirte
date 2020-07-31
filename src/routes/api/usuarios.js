const express = require('express');
const router = express.Router();

const usuariosApiController = require('../../controller/api/usuariosApiController')

//lista los productos end-point= http://127.0.0.1:3000/api/productos
router.get("/",usuariosApiController.list)
/* router.get('/detalles/:usuariosId/', usuariosApiController.detalle); */



module.exports = router;