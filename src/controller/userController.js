//***MODULE REQUIRE***//
const bcrypt = require('bcrypt');
const db = require ('../database/models')

//***CONTROLLERS***//
module.exports = {
    login: (req, res, next) => {
        res.render('usuarios-login')
    },
    registro: (req, res, next) => {
        res.render('usuarios-registro')
    },
    crear: (req, res, next) => {
        db.usuarios.create ({
            nombre:req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            categoria: 'user',
            image: req.files[0].filename
        });
        res.redirect('/usuarios/login')
    },
    checklogin: (req, res) => {
        db.usuarios.findOne({
            where:{
                email:req.body.email
            }
        })
        .then(function(usuariolog){
            if (usuariolog != undefined) {
                if (bcrypt.compareSync(req.body.password, usuariolog.dataValues.password)) {

                    
                    delete usuariolog.dataValues.password
                    req.session.user = usuariolog.dataValues
                    

                    if (req.body.recuerdame) {
                        res.cookie('usuario', usuariolog.dataValues.id, {maxAge: 1000 * 60 * 60 * 24 * 90 });
                    }
                    res.redirect(`perfil/${usuariolog.dataValues.id}`)
                } else {
                    res.render('usuarios-login', {
                        errors: {
                            password: 'la contrasena no coincide'
                        }
                    })
                }
            } else {
                res.render('usuarios-login', {
                    errors: {
                        email: 'email ingresado es incorrecto'
                    }
                })
            }
        })
    },
    perfil: (req, res) => {
        db.usuarios.findByPk(req.params.id)
        .then (function(usuariolog){
            res.render('perfil', {usuariolog});
        })
    },
    logout: (req, res) => {
        req.session.user = null;
        res.clearCookie('usuario');
        
        res.locals.usuario = null
        res.redirect('/')
    }
}