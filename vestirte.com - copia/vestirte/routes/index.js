var express = require('express');
var router = express.Router();

//requeriri Controlladores
const mainController = require('../controller/mainController')


/* GET home page. */
router.get('/',mainController.root);

 /* GET producto page. */
router.get('/productos',mainController.productos
);

/* GET detalles page. */
router.get('/detalles',mainController.detalles
);

/* GET carrito page. */
router.get('/carrito',mainController.carrito
);

/* GET Administrador page. */
router.get('/admin',mainController.admin
);

/* GET login page. */
router.get('/login',mainController.login
);

/* GET formulario de productos page. */
router.get('/formulario',mainController.formulario
); 

module.exports = router;
