var express = require('express');
var router = express.Router();

//requeriri Controlladores
const indexController = require('../controller/indexController')
/* const productosController = require('../controller/productosController')
const detallesController = require('../controller/detallesController')
const carritoController = require('../controller/carritoController')
const adminController = require('../controller/adminController')
const loginController = require('../controller/loginController')
const formularioController = require('../controller/formularioController') */
/* GET home page. */
router.get('/',indexController.index
);

/* /* GET producto page. */
router.get('/productos',productosController.productos
);

/* GET productos page. */
router.get('/detalles',detallesController.detalles
);

/* GET carrito page. */
router.get('/carrito',carritoController.carrito
);

/* GET Administrador page. */
router.get('/admin',adminController.admin
);

/* GET login page. */
router.get('/login',loginController.login
);

/* GET formulario de productos page. */
router.get('/formulario',formularioController.formulario
);
 */
module.exports = router;
