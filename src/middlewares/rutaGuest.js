//***MODULE REQUIRE***//
const db = require ('../database/models');

module.exports = (req, res, next) => {
    if (req.session.user) {
        db.usuarios.findByPk(req.session.user.id)
        .then (function(usuariolog){
            console.log (usuariolog.dataValues)
            res.redirect(`perfil/${usuariolog.dataValues.id}`)
            return;
        }
        )}
        next ()
    }
    
    
