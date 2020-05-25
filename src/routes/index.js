// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Require's Controllers************
const indexController = require('../controller/indexController')
const productosController = require('../controller/productosController.js')
const userController = require('../controller/userController.js')

/*** INDEX ***/ 
router.get('/', indexController.root); /* GET - todos productos */

/*** DETALLE DE PRODUCTO ***/ 
router.get('/detalles/:productoId/', indexController.detalles); /* GET - detalles de produtos*/

/*** LOGIN DE USER ***/ 
router.get('/login', userController.login)
router.get('/registracion', userController.registracion)

/*** CREAR UN PRODUCTO ***/ 
router.get('/productos/crear/', productosController.create); /* GET - FORMULARIO DE CREACION */
router.post('/productos/crear/', productosController.store); /* POST - ENVIO DE INFO DEL FORMULARIO */

/*** TODOS LOS PRODUCTOS ***/ 
router.get('/productos/', productosController.list); /* GET - FORMULARIO DE CREACION */

/*** CARRITO ***/ 
router.get('/carrito', userController.carrito);

/*** EDITAR UN PRODUCTO ***/ 
router.get('/detalles/:productoId/editar', productosController.edit); /* GET - FORMULARIO DE CREACION */
router.put('/detalles/editar', productosController.update); /* PUT -SUBIDA  */

/*** ELIMINAR PRODUCTO***/ 
router.delete('/delete/:productoId', productosController.destroy); /* DELETE - Delete from DB */

module.exports = router;
