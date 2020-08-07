//***MODULE REQUIRE***//
const db = require ('../database/models')
const {validationResult} = require('express-validator')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

//***CONTROLLER METHODS***//

module.exports= {

search: async (req, res) => {
      let productoFiltrados= req.query.query
        
      let productos=await db.productos.findAll( {
           
             where:{
                 nombre:{[Op.like]: `%${productoFiltrados}%`}

             } 
              })
              res.render('productos', {productos})
    }
    ,
crear: (req, res) => {
    db.productos.findAll()
    .then (function(productos){
        res.render('productos-detalle', {productos});
    })
},

listar: (req, res) => {
    db.productos.findAll()
    .then (function(productos){
        res.render('productos', {productos})
    })
},

detalle: async (req, res) => {
         let producto= await db.productos.findByPk(req.params.productoId)

        
         return res.render('productos-detalle', {producto});
        } ,

guardar:  (req, res) => {
   
    let errors=validationResult(req);
    console.log(errors)
    if (errors.isEmpty()){

    
      db.productos.create ({
        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
        precio:req.body.precio,
        descuento:req.body.descuento,
        imagen:req.files[0].filename,
        categoria:req.body.categoria,
        envio:req.body.envio,
        stock:req.body.stock,
        });
    res.redirect('/productos')
}else{
    
    let errores= errors.errors
    
     res.send('ERROR')
     

}
},
editar: (req, res) => {
   
    db.productos.findByPk(req.params.productoId)
    .then (function(productoedit){
        console.log (productoedit.dataValues)
        res.render('productos-editar',{productoedit})
    })
},

actualizar: (req, res) => {
    db.productos.update ({
        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
        precio:req.body.precio,
        descuento:req.body.descuento,
        imagen:req.body.imagen,
        categoria:req.body.categoria,
        envio:req.body.envio,
        stock:req.body.stock,
        }, { 
            where: {
            id: req.params.productoId
        }        
        });
    res.redirect('/productos/detalles/' + req.params.productoId)
},
destruir : (req, res) => {
    db.productos.destroy({
        where:{
            id:req.params.productoId
        }
    })
    res.redirect('/productos/crear')
}
};