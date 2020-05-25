const fs = require('fs');
const path = require('path');

//let productos=array de productos
const dataBasePath = path.join(__dirname,'../data/productos.json');
let productos = JSON.parse(fs.readFileSync(dataBasePath),'utf-8')
const enMiles = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


//precio final del productos =  let producto = precio final del producto
productos = productos.map (producto => {
    //let descuento = Math.floor(producto.precio * producto.descuento) / 100;
    //let precioFinal = producto.precio-descuento;
    //producto.final_precio = enMiles(precioFinal);
    producto.precio = enMiles(producto.precio);
    return producto;
});

//filtra ofertas y visitados
// const ofertas = productos.filter(producto => producto.category == 'oferta');
// const visitados = productos.filter(producto => producto.category == 'visitado');
// const destacados = productos.filter(producto => producto.category == 'destacado')

//////////

module.exports= {
create: (req, res) => {
    res.render('productos-crear', {productos});
},

list: (req, res) => {
    res.render('productos',{productos});
},

detail: (req, res) => {
    let producto = productos.find (prod => prod.id == req.params.productoId)
    res.render('productodetalle', {producto, productos, enMiles});
},

store: (req, res) => {
    let ids = productos.map(prod=>prod.id) // [1,2,3,4,5....]
    let id = Math.max(...ids) + 1 //17
    req.body.precio = Number(req.body.precio)
    let productoNuevo = {
        id:id,
        ... req.body,
        imagen: 'default-image.png'
    }
    let final = [...productos,productoNuevo];
    fs.writeFileSync(dataBasePath, JSON.stringify(final,null,' '));

    res.redirect('/productos')
},

// Update - Formulario de edicion de productosm existentes y lo muestra
edit: (req, res) => {
    let productoedit = productos.find(prod => prod.id == req.params.productoId)
    res.render('editar',{productoedit});
},
// Update - formulario con info para modificar buscado por id
update: (req, res) => {

    req.body.precio = Number(req.body.precio)

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
}
};