const { check } = require('express-validator');

module.exports = {
    userLogin: [
        check('email')
            .notEmpty().withMessage('Debes completar el email').bail()
            .isEmail().withMessage('El email no es válido').bail()
            ,
        check('password')
            .notEmpty().withMessage('Debes completar el password').bail()
            .isLength({ min: 3 }).withMessage('La contrasena debe tener al menos 3 caracteres')
    ],
    userCreate: [
        check('email')
            .notEmpty().withMessage('Debes completar el email').bail()
            .isEmail().withMessage('El email no es válido')
            ,
        check('password')
            .notEmpty().withMessage('Debes completar el password').bail()
            .isLength({ min: 3 }).withMessage('La contrasena debe tener al menos 3 caracteres')
    ]
}