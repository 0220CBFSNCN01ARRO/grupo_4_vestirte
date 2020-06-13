//***MODULE REQUIRE***//
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
//const checklogin = require ('..middlewares/checklogin.js');

//***PRODUCTOS UNPACK***//
const dataBasePath = path.join(__dirname, '../data/productos.json');
let productos = JSON.parse(fs.readFileSync(dataBasePath), 'utf-8');

//***USUARIOS UNPACK***//
const databaseUserPath = path.join(__dirname, '../data/usuarios.json');
let usuarios = JSON.parse(fs.readFileSync(databaseUserPath), 'utf-8')

//***CONTROLLERS***//
module.exports = {
    login: (req, res, next) => {
        res.render('usuarios-login')
    },
    registro: (req, res, next) => {
        res.render('usuarios-registro')
    },
    crear: (req, res, next) => {
        let ids = usuarios.map(usua => usua.id)
        let id = Math.max(...ids) + 1
        let usuarioNuevo = {
            id: id,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            categoria: 'user',
            image: req.files[0].filename
        };
        console.log(usuarioNuevo);
        let usuarioJSON = [...usuarios, usuarioNuevo];
        fs.writeFileSync(databaseUserPath, JSON.stringify(usuarioJSON, null, ' '));

        res.redirect('/usuarios/login')
    },
    checklogin: (req, res, next) => {
        let usuariolog = usuarios.find(usua => usua.email == req.body.email)

        if (usuariolog != undefined) {
            if (bcrypt.compareSync(req.body.password, usuariolog.password)) {

                // delete usuariolog.password
                req.session.user = usuariolog

                if (req.body.recuerdame) {
                    res.cookie('usuario', usuariolog.id, { maxAge: 1000 * 60 * 60 * 24 * 90 });
                    /*  console.log(res.cookie)
                     console.log(usuariolog) */
                }
                res.redirect(`perfil/${usuariolog.id}`)
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
    },
    perfil: (req, res) => {
        let usuariolog = usuarios.find(usua => usua.id == req.params.id)
        res.render('perfil', { usuariolog });

    },
    logout: (req, res) => {
        req.session.user = null;
        res.clearCookie('usuario');

        res.locals.usuario = null
        res.redirect('/')
    }
}