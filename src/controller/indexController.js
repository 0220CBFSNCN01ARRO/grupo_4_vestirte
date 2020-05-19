const fs = require('fs');
const path = require('path');

//let productos=array de productos
const databasePath = path.join(__dirname,'../data/productosDatabase.json');
let productos = JSON.parse(fs.readFileSync(databasePath),'utf-8')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

//precio final del productos =  let producto = precio final del producto
productos = productos.map(producto => {
    let descuento = Math.floor(producto.precio * producto.descuento) / 100;
    let precioFinal = producto.precio-descuento;
    producto.final_precio = toThousand(precioFinal);
    producto.precio = toThousand(producto.precio);
    return producto;
});
//filtra ofertas y visitados
const ofertas = productos.filter(producto => producto.category == 'oferta');
const visitados = productos.filter(producto => producto.category == 'visitado');
const destacados = productos.filter(producto => producto.category == 'destacado')
// console.log(ofertas);

module.exports={
    index:(req, res, next) =>
            res.render('index',{destacados,productos})}
        
       

    
    
