//***MODULE REQUIRE***//
const bcrypt = require('bcrypt');
const db = require ('../database/models')
const { validationResult } = require('express-validator');

//***CONTROLLERS***//
module.exports = {
    login: (req, res, next) => {
        res.render('usuarios-login')
    },
    registro: (req, res, next) => {
        res.render('usuarios-registro')
    },
    crear: async (req, res, next) =>   {
        
        let emailEncontrado = await db.usuarios.findOne({
            where:{
                email:req.body.email
            } 
        })
        let emaildb = emailEncontrado.email
      
           if(emaildb!=req.body.email) {
        db.usuarios.create ({
            nombre:req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            categoria: 'user',
            image: req.files[0].filename
        });
        res.redirect('/usuarios/login')
        
    }else{
        
        res.render('usuarios-registro',emaildb)
    }

}
        ,
    checklogin: async (req, res) => {
        
        let errors = validationResult(req);
        
        if(!errors.isEmpty()) {
            return res.render('usuarios-login', { 
                errors: errors.mapped()
            });
        } else {
            let userencontrado = await db.usuarios.findOne({
                where:{
                    email:req.body.email
                }
            })
            if (userencontrado){
                if (bcrypt.compareSync(req.body.password, userencontrado.dataValues.password)) {
                    
                    delete userencontrado.dataValues.password
                    req.session.user = userencontrado.dataValues
                    //si recuerda
                    if (req.body.recuerdame) {
                        res.cookie('usuario', userencontrado.dataValues, {maxAge: 1000 * 60 * 60 * 24 * 90 });
                        res.redirect(`perfil/${userencontrado.dataValues}`)
                        //si no recuerda
                    } else {
                        res.redirect(`perfil/${userencontrado.dataValues}`)
                    }
                    //si la contrasena no coincide
                } else {
                    return res.render('usuarios-login', { 
                        errors: {
                            password: {
                                msg: 'Lacontrasena no coincide con la base'
                            },
                        }
                    });
                };
            } else {
                return res.render('usuarios-login', {
                    errors: {
                        email: {
                            msg: 'El email no se encuentra registrado en nuestra base de datos' 
                        }, 
                    }
                });
            }
        }
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