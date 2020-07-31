const express = require('express');
const router = express.Router();

const usuariosApiController = require('../../controller/api/usuariosController')

//lista los productos end-point= http://127.0.0.1:3000/api/usuarios
router.get("/",usuariosApiController.list)
router.get('/detalles/:productoId/', usuariosApiController.detalle);


module.exports = router;