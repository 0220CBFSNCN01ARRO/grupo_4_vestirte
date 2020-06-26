//***MODULE REQUIRE***//
const db = require ('../database/models');

module.exports = (req, res, next) => {
    if (req.session.user) {
            res.redirect(`perfil/${req.session.user.id}`)
            return;
        }
        next ()
    }
    
    
