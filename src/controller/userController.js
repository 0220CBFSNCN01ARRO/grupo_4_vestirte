const fs = require('fs');
const path = require('path');

const dataBasePath = path.join(__dirname,'../data/productosDatabase.json');
let productos = JSON.parse(fs.readFileSync(dataBasePath),'utf-8')
const enMiles = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports={
    login:(req, res, next) =>{
            res.render('login')},
    carrito:(req, res, next) =>{
            res.render('carrito', {productos, enMiles})}
        }