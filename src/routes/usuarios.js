// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const rutaGuest = require('../middlewares/rutaGuest');
const rutaUser = require('../middlewares/rutaUser');
const loginValidator = require('../middlewares/loginValidator')
const registroValidator = require('../middlewares/registroValidator')
const {
    check,
    validationResult,
    body
} = require('express-validator');

// ************ Multer************
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img/img-users')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
        /*    console.log(path.extname(file.originalname)) */
    },
});
var upload = multer({
    storage: storage
});



// ************ Require's Controllers************
const userController = require('../controller/userController.js')

/*** RUTAS DE GUEST ***/
router.get('/login', rutaGuest, userController.login)
router.post('/login', rutaGuest, loginValidator.userLogin, userController.checklogin)
router.get('/registro', rutaGuest, registroValidator.userRegistro, userController.registro)
router.post('/crear', upload.any(), rutaGuest,
    [
        check('nombre').isLength({
            min: 2
        }).withMessage('El nombre debe tener al menos 2 caracteres.'),
        check('apellido').isLength({
            min: 2
        }).withMessage('El apellido debe tener al menos 2 caracteres.'),
        check('password').isLength({
            min: 8
        }).withMessage('La contraseña debe tener al menos 8 caracteres.'),
        check('email').isEmail().withMessage('Debe ingresar un email válido.'),
        check('image').isEmpty().withMessage('Debe ingresar una imagen.')
    ],
    userController.crear)

/*** RUTAS DE SESSION ***/

router.get('/perfil/:id', rutaUser, userController.perfil)
router.post('/logout', rutaUser, userController.logout);

module.exports = router;