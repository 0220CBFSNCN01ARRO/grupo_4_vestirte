const fs = require('fs');
const path = require('path');

//let productos=array de productos
const dataBasePath = path.join(__dirname,'../data/productosDatabase.json');
let productos = JSON.parse(fs.readFileSync(dataBasePath),'utf-8')
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
const ofertas = productos.filter(producto => producto.category == 'oferta');
const visitados = productos.filter(producto => producto.category == 'visitado');
const destacados = productos.filter(producto => producto.category == 'destacado')
// console.log(ofertas);

// Create - Formulario de creacion de productos
module.exports={
create: (req, res) => {
    res.render('cargar-productos');
},

// Create -  Method to store
store: (req, res) => {
    // como elegir el id
    let ids = products.map(prod=>prod.id) // [1,2,3,4,5....]
    // Math.max(1,2,3) -> 3
    let id = Math.max(...ids) + 1 //17
    // creo el producto con los datos del form

    req.body.precio = Number(req.body.precio)
    req.body.descuento = Number(req.body.descuento)

    let productoNuevo = {
        id:id,
        ... req.body,
        image: 'default-image.png'
    }
    // agrego el producto al array de productos
    let final = [...productos,productoNuevo];
    // lo guardo en el json
    fs.writeFileSync(dataBasePath, JSON.stringify(final,null,' '));
    // redirecciono a la lista de productos
    res.redirect('/productos')
},

// Update - Formulario de edicion de productosm existentes y lo muestra
edit: (req, res) => {
    let producto = productos.find(prod => prod.id == req.params.productoId)
    res.render('formulario-edit',{
        producto
    });
},
// Update - formulario con info para modificar buscado por id
update: (req, res) => {

    req.body.precio = Number(req.body.precio)
    req.body.descuento = Number(req.body.descuento)

    let final = products.map(prod => {
        if(prod.id == req.params.productId){
            return {
                id: prod.id,
                ...req.body,
                image: prod.image
            }
        } else {
            return prod
        }
    })

    // lo guardo en el json
    fs.writeFileSync(dataBasePath, JSON.stringify(final, null, ' '));
    // redirecciono a la lista de productos
    res.redirect('/productos')
},

// Delete - Delete one product from DB
destroy : (req, res) => {
    // SACAR EL PRODUCTO QUE TENGO Y GUARDAR LOS PRODUCTOS SIN EL QUE BORRE
    let final = productos.filter(prod=> prod.id != req.params.productId)
    // lo guardo en el json
    fs.writeFileSync(dataBasePath, JSON.stringify(final, null, ' '));
    // redirecciono a la lista de productos
    res.redirect('/productos')
}
};