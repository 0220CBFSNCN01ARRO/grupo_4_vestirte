const fs = require('fs');
const path = require('path');

//let productos=array de productos
const databasePath = path.join(__dirname,'../data/productosDatabase.json');
let productos = JSON.parse(fs.readFileSync(databasePath),'utf-8')
const enMiles = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

//precio final del productos =  let producto = precio final del producto
productos = productos.map(producto => {
    let descuento = Math.floor(producto.precio * producto.descuento) / 100;
    let precioFinal = producto.precio-descuento;
    producto.final_precio = enMiles(precioFinal);
    producto.precio = enMiles(producto.precio);
    return producto;
});
//filtra ofertas y visitados
const ofertas = productos.filter(producto => producto.category == 'ofertas');
const visitados = productos.filter(producto => producto.category == 'visitados');
const destacados = productos.filter(producto => producto.category == 'destacados');
const carrusel = productos.filter(producto => producto.category == 'carrusel');


//onsole.log(carrusel);

module.exports={
    root:(req, res, next) =>{
            res.render('index',{destacados,productos,carrusel})},
        
admin:(req, res)=>{
    res.render('login')
},
        // Detalles informacion-compara el parametro del id del producto, con el id pasado
        // por url,al enconrarlo lo guarda en producto
	detalles: (req, res) => {
		let idProducto = productos.find(prod => prod.id == req.params.productoId)
        res.render('detalles', 
                    {idProducto, 
			        enMiles})	
},
}
        
       

    
    
