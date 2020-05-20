// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Require's Controllers************
const indexController = require('../controller/indexController')
const productosController = require('../controller/productosController.js')


router.get('/', indexController.root); /* GET - todos productos */
 
router.get('/detalles/:productoId/', indexController.detalles); /* GET - detalles de produtos*/
router.get('/login', indexController.admin)

/*** CREAR UN PRODUCTO ***/ 
router.get('/create/', productosController.create); /* GET - FORMULARIO DE CREACION */
router.post('/create/', productosController.store); /* POST - ENVIO DE INFO DEL FORMULARIO */

/*** CREAR UN PRODUCTO ***/ 
router.get('/productos/', productosController.list); /* GET - FORMULARIO DE CREACION */

/*** EDITAR UN PRODUCTO ***/ 
router.get('/edit/:productoId', productosController.edit); /* GET - FORMULARIO DE CREACION */
router.put('/edit/:productoId', productosController.update); /* PUT -SUBIDA  */

/*** ELIMINAR PRODUCTO***/ 
router.delete('/delete/:productoId', productosController.destroy); /* DELETE - Delete from DB */

module.exports = router;
