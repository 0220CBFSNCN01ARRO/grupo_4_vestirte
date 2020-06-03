// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require ('multer');
let path = require ('path');


// ************ Multer************
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'public/img/img-users')
    },
    filename: function (req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    },
});
var upload = multer ({storage: storage});



// ************ Require's Controllers************
const userController = require('../controller/userController.js')

/*** LOGIN DE USER ***/
router.get('/login', userController.login)

router.get('/registro', userController.registro)



/* ruta post de registro de usuario */
router.post('/crear', upload.any(), userController.crear)


module.exports = router;
