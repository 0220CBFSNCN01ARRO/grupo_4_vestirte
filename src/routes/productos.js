// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Require's Controllers************
const productosController = require('../controller/productosController.js')

/*** TODOS LOS PRODUCTOS ***/ 
router.get('/', productosController.listar);

/*** DETALLE DE PRODUCTO ***/ 
router.get('/detalles/:productoId/', productosController.detalle);

/*** CREAR UN PRODUCTO ***/ 
router.get('/crear/', productosController.crear);
router.post('/crear/', productosController.guardar);

/*** EDITAR UN PRODUCTO ***/ 
router.get('/detalles/:productoId/editar', productosController.editar);
router.put('/:productoId/', productosController.actualizar);

/*** ELIMINAR PRODUCTO***/ 
router.delete('/:productoId', productosController.destruir);

module.exports = router;