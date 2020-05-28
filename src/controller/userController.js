const fs = require('fs');
const path = require('path');

const dataBasePath = path.join(__dirname,'../data/productos.json');
let productos = JSON.parse(fs.readFileSync(dataBasePath),'utf-8')
//const enMiles = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports={
    login:(req, res, next) =>{
            res.render('usuarios-login')},
    landing:(req, res, next) =>{
                res.render('landing')},
    carrito:(req, res, next) =>{
            res.render('carrito', {productos, enMiles})},
    registro:(req, res, next) =>{
                res.render('usuarios-registro')}
        }