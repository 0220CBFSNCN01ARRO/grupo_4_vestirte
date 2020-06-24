//***MODULE REQUIRE***//
const fs = require('fs');
const path = require('path');
const db = require ('../database/models');

module.exports = (req, res, next) => {
    if (req.session.user) {
        db.usuarios.findByPk(req.session.user.id)
        .then (function(usuariolog){
            res.redirect(`perfil/${usuariolog.id}`)
        }
        )}
        next ()
    }
    
    
    
    
    
    
    //     res.render('perfil', {usuariolog});
    // let usuariolog = usuarios.find(usua => usua.id == req.session.user.id)