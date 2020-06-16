//***MODULE REQUIRE***//
const fs = require('fs');
const path = require('path');

//***USUARIOS UNPACK***//
const databaseUserPath = path.join(__dirname, '../data/usuarios.json');
let usuarios = JSON.parse(fs.readFileSync(databaseUserPath), 'utf-8')

module.exports = (req, res, next) => {
    if (req.session.user) {
        let usuariolog = usuarios.find(usua => usua.id == req.session.user.id)
        res.redirect(`perfil/${usuariolog.id}`);
    
}next()
}

