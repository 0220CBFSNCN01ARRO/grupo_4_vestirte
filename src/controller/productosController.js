const fs = require('fs');
const path = require('path');

//let productos=array de productos
const dataBasePath = path.join(__dirname,'../data/productos.json');
let productos = JSON.parse(fs.readFileSync(dataBasePath),'utf-8')

//filtra ofertas y visitados
// const ofertas = productos.filter(producto => producto.category == 'oferta');
// const visitados = productos.filter(producto => producto.category == 'visitado');
// const destacados = productos.filter(producto => producto.category == 'destacado')


module.exports= {
crear: (req, res) => {
    res.render('productos-crear', {productos});
},

listar: (req, res) => {
    res.render('productos',{productos});
},

detalle: (req, res) => {
    let producto = productos.find (prod => prod.id == req.params.productoId)
    res.render('productos-detalle', {producto, productos});
},

guardar: (req, res) => {
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

editar: (req, res) => {
    var productoedit = productos.find(prod => prod.id == req.params.productoId)
    res.render('productos-editar',{productoedit});
},
actualizar: (req, res) => {
    req.body.precio = Number(req.body.precio);
    let final = productos.map(prod => {
        if(prod.id == req.params.productoId){
            return {
                id: prod.id,
                ...req.body,
            }
        } else {
            return prod
        }
    })
fs.writeFileSync(dataBasePath, JSON.stringify(final, null, ' '));
res.redirect('/productos/crear');
},
destruir : (req, res) => {
    let final = productos.filter(prod=> prod.id != req.params.productoId)
    fs.writeFileSync(dataBasePath, JSON.stringify(final, null, ' '));
    res.redirect('/productos/crear');
}
};