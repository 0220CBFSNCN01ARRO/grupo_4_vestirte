const fs = require('fs');
const path = require('path');

//let productos=array de productos
const databasePath = path.join(__dirname, '../data/productos.json');
let productos = JSON.parse(fs.readFileSync(databasePath), 'utf-8')

//filtra ofertas y visitados
const ofertas = productos.filter(producto => producto.categoria == 'oferta');
const visitados = productos.filter(producto => producto.categoria == 'visitado');
const destacados = productos.filter(producto => producto.categoria == 'destacado');
const carrusel = productos.filter(producto => producto.categoria == 'carrusel');


//loader vistas
module.exports = {
    root: (req, res, next) => {
        res.render('index', { destacados, productos, carrusel })
    },
}





