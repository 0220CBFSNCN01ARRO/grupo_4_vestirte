//***MODULE REQUIRE***//
const fs = require('fs');
const path = require('path');

module.exports = (req, res, next) => {
    if (req.session.user) {
        let usuariolog = usuarios.find(usua => usua.id == req.session.user.id)
        res.redirect(`perfil/${usuariolog.id}`);
    
}next()
}

