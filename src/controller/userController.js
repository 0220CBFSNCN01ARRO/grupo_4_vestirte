//***MODULE REQUIRE***//
const bcrypt = require('bcrypt');
const db = require ('../database/models')
const { validationResult } = require('express-validator');

//***CONTROLLERS***//

 
module.exports = {
    login: (req, res, next) => {
        let token = false;
        res.render('usuarios-login', {token})
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
        if(!emailEncontrado){

           let UserSession= {
            nombre:req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            categoria: 'user',
            image: req.files[0].filename
           }
        let UserSessionCreated = await db.usuarios.create (
                UserSession
        );
        
        delete UserSessionCreated.dataValues.password
        req.session.user = UserSessionCreated.dataValues
        res.locals.user = UserSessionCreated.dataValues

        res.redirect(`perfil/${UserSessionCreated.dataValues.id}`)
    }else{
        let token = true;
        res.render('usuarios-login', {token})
    }
},
    checklogin: async (req, res) => {
        let token = false;
        let errors = validationResult(req);
        
        if(!errors.isEmpty()) {
            return res.render('usuarios-login', { 
                errors: errors.mapped(), token
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
                        res.redirect(`perfil/${userencontrado.dataValues.id}`)
                        //si no recuerda
                    } else {
                        res.redirect(`perfil/${userencontrado.dataValues.id}`)
                    }
                    //si la contrasena no coincide
                } else {
                    return res.render('usuarios-login', { 
                        errors: {
                            password: {
                                msg: 'Lacontrasena no coincide con la base'
                            },
                        }, token
                    });
                };
            } else {
                return res.render('usuarios-login', {
                    errors: {
                        email: {
                            msg: 'El email no se encuentra registrado en nuestra base de datos' 
                        }, 
                    }, token
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