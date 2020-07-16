// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require ('multer');
const path = require ('path');
const rutaGuest = require ('../middlewares/rutaGuest');
const rutaUser = require ('../middlewares/rutaUser');
const loginValidator = require ('../middlewares/loginValidator')
const registroValidator = require ('../middlewares/registroValidator')


// ************ Multer************
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'public/img/img-users')
    },
    filename: function (req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
     /*    console.log(path.extname(file.originalname)) */
    },
});
var upload = multer ({storage: storage});



// ************ Require's Controllers************
const userController = require('../controller/userController.js')

/*** RUTAS DE GUEST ***/
router.get('/login', rutaGuest, userController.login)
router.post('/login', rutaGuest, loginValidator.userLogin, userController.checklogin)
router.get('/registro',  rutaGuest,registroValidator.userRegistro, userController.registro)
router.post('/crear', upload.any(),rutaGuest, userController.crear)

/*** RUTAS DE SESSION ***/

router.get('/perfil/:id', rutaUser, userController.perfil)
router.post('/logout', rutaUser, userController.logout);

module.exports = router;
