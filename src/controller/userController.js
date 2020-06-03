const fs = require('fs');
const path = require('path');
const bcrypt = require ('bcrypt');

const dataBasePath = path.join(__dirname,'../data/productos.json');

let productos = JSON.parse(fs.readFileSync(dataBasePath),'utf-8');
//const enMiles = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const databaseUserPath = path.join(__dirname,'../data/usuarios.json');
let usuarios = JSON.parse(fs.readFileSync(databaseUserPath),'utf-8')

module.exports={
    login:(req, res, next) =>{
            res.render('usuarios-login')},
    landing:(req, res, next) =>{
                res.render('landing')},
    carrito:(req, res, next) =>{
            res.render('carrito', {productos, enMiles})},
    registro:(req, res, next) =>{
                res.render('usuarios-registro')},

    crear: (req, res, next)=>{
        let ids = usuarios.map(usua=>usua.id)
        let id = Math.max(...ids) + 1
                let usuarioNuevo = {
                 id: id,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                password: bcrypt.hashSync (req.body.password, 10),
                categoria: 'user',
                image: req.files[0].filename
        };
        let usuarioJSON = [...usuarios,usuarioNuevo];
    fs.writeFileSync(databaseUserPath, JSON.stringify(usuarioJSON,null,' '));

    res.redirect('/usuarios/login')
}
        }