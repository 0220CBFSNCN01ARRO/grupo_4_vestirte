//***MODULE REQUIRE***//
const fs = require('fs');
const path = require('path');
const db = require ('../database/models')


module.exports= {
crear: (req, res) => {
    res.render('productos-crear', {productos});
},

listar: (req, res) => {
    db.productos.findAll()
    .then (function(productos){
        res.render('productos', {productos})
    })
},

detalle: (req, res) => {
        db.productos.findByPk(req.params.productoId)
        .then (function(producto){
            res.render('productos-detalle', {producto});
        })
},

guardar: (req, res) => {
    let ids = productos.map(prod=>prod.id) // [1,2,3,4,5....]
    let id = Math.max(...ids) + 1 //17
    req.body.precio = Number(req.body.precio)
    let productoNuevo = {
        id:id,
        ... req.body,
        imagen: req.files[0].filename
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