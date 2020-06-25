//***USUARIOS UNPACK***//
const db = require ('../database/models')

module.exports = (req, res, next) => {
    res.locals.user = false;

    if (req.session.user) {
    res.locals.user = req.session.user

    } else if (req.cookies.usuario) {
        db.usuarios.findByPk(req.cookies.usuario)
        .then (function(usuariolog){
            delete usuariolog.dataValues.password;
            req.session.user = usuariolog.dataValues;
            res.locals.user = usuariolog.dataValues;
        }
        )
    }
    next();
};