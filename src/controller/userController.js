const fs = require('fs');
const path = require('path');

const dataBasePath = path.join(__dirname,'../data/productos.json');
let productos = JSON.parse(fs.readFileSync(dataBasePath),'utf-8')

module.exports= {
    login:(req, res, next) =>{
            res.render('login')},
    registro:(req, res, next) =>{
                res.render('registro')},
        landing:(req, res, next) =>{
        res.render ('landing',{productos})
}
}