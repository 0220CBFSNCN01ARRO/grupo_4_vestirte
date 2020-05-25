// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Require's Controllers************
const indexController = require('../controller/indexController')
const productosController = require('../controller/productosController.js')
const userController = require('../controller/userController.js')

/*** INDEX ***/ 
router.get('/', indexController.root); 

/*** TODOS LOS PRODUCTOS ***/ 
router.get('/productos/', productosController.list); /* GET - FORMULARIO DE CREACION */

/*** DETALLE DE PRODUCTO ***/ 
router.get('/productos/detalles/:productoId/', productosController.detalle); /* GET - detalles de produtos*/

/*** CREAR UN PRODUCTO ***/ 
router.get('/productos/crear/', productosController.create); /* GET - FORMULARIO DE CREACION */
router.post('/productos/crear/', productosController.store); /* POST - ENVIO DE INFO DEL FORMULARIO */

/*** EDITAR UN PRODUCTO ***/ 
router.get('productos/detalles/:productoId/editar', productosController.edit); /* GET - FORMULARIO DE CREACION */
router.put('productos/detalles/editar', productosController.update); /* PUT -SUBIDA  */

/*** ELIMINAR PRODUCTO***/ 
router.delete('productos/delete/:productoId', productosController.destroy); /* DELETE - Delete from DB */

/*** CARRITO ***/ 
router.get('/carrito', userController.carrito);

/*** LOGIN DE USER ***/
router.get('/login', userController.login)
router.get('/registracion', userController.registracion)

module.exports = router;
