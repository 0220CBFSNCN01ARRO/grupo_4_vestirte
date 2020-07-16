const {check} = require('express-validator')

module.exports = {
    checkProduct:
    [
        //campos a chekear 
        check('nombre').isLength({min:5}),
        check('descripcion').isLength({min:20}),
        check('precio').isInt().isLength({min:1}),
        check('descuento').isInt().isLength({min:3}),
        check('categoria').isLength({min:3}),
        check('envio').isInt().isLength(),
        check('stock').isInt().isLength()
        
    ]

    

}