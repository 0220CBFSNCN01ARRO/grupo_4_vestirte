var express = require('express');
var router = express.Router();
const ProductosApiController = require('../../controllers/api/productosApiController');

/* Crud Productos */
router.get('/', ProductosApiController.index);
/* router.get('/recommended', ProductosApiController.recommended);
router.get('/news', ProductosApiController.news);
router.get('/search', ProductosApiController.search)
router.get('/:id', ProductosApiController.show);
router.post('/', ProductosApiController.store)
router.put('/:id', ProductosApiController.update);
router.delete('/:id', ProductosApiController.destroy); */


module.exports = router;