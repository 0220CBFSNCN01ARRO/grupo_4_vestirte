//***USUARIOS UNPACK***//
const path = require('path');
const fs = require('fs');
const databaseUserPath = path.join(__dirname, '../data/usuarios.json');
let usuarios = JSON.parse(fs.readFileSync(databaseUserPath), 'utf-8')




module.exports = (req, res, next) => {
    res.locals.user = false;
    //no se cerro el navegador
    if (req.session.user) {
        res.locals.user = req.session.user
        /* console.log(req.session.user) */
        //existe si pones recordame 
    } else if (req.cookies.usuario) {

        let usuariolog = usuarios.find(usua => usua.id == req.cookies.usuario)

        req.session.user = usuariolog;
        res.locals.user = usuariolog;
        console.log(req.cookies.usuario)
        /* console.log(req.session.user)
        console.log(res.locals.user) */
    }
    next();
};