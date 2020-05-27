const fs = require('fs');
const path = require('path');

const dataBasePath = path.join(__dirname,'../data/productos.json');
let productos = JSON.parse(fs.readFileSync(dataBasePath),'utf-8')

module.exports= {
carrito:(req, res, next) =>{
    res.render('carrito', {productos})}
};
