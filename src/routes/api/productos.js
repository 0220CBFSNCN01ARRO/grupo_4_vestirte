const express = require('express');
const router = express.Router();

const productoApiController = require('../../controller/api/productosController')

//lista los productos end-point= http://127.0.0.1:3000/api/productos
router.get("/",productoApiController.list)
router.get('/ultimo', productoApiController.ultimo);
router.get('/:productoId/', productoApiController.detalle);



module.exports = router;