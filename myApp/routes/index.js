var express = require('express');
var router = express.Router();

const homeController = require('../controller/homeController');//requerir homeController de carpeta controller

/* GET home page. */
router.get('/',homeController.index);// si la peticion es "/"=>ejucta homeController
/* GET productos page. */
router.get('/productos', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
