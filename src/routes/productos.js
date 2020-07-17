// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
let path = require('path');

const crearValidator = require('../middlewares/creacionProductosValidator')




// ************ Multer************
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img/img-productos')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    },
});
var upload = multer({
    storage: storage
});




// ************ Require's Controllers************
const productosController = require('../controller/productosController.js');
const {
    check
} = require('express-validator');

/*** TODOS LOS PRODUCTOS ***/
router.get('/', productosController.listar);

/*** DETALLE DE PRODUCTO ***/
router.get('/detalles/:productoId/', productosController.detalle);

/*** CREAR UN PRODUCTO ***/
router.get('/crear/', productosController.crear);
router.post('/crear/', upload.any(), crearValidator.checkProduct, productosController.guardar);

/*** EDITAR UN PRODUCTO ***/
router.get('/editar/:productoId', productosController.editar);
router.put('/:productoId/',
    [
        check('nombre').isLength({
            min: 5
        }).withMessage('Nombre debe tener 5 caracteres.'),
        check('descripcion').isLength({
            min: 20
        }).withMessage('La descripcion debe tener al menos 20 caracteres.')
    ],
    productosController.actualizar);

/*** ELIMINAR PRODUCTO***/
router.delete('/:productoId/destruir', productosController.destruir);

module.exports = router;