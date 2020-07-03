//***MODULE REQUIRE***//
const db = require ('../database/models')

//***CONTROLLER METHODS***//

module.exports= {
crear: (req, res) => {
    db.productos.findAll()
    .then (function(productos){
        res.render('productos-crear', {productos});
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
         let usuario= await db.usuarios.findByPk(req.session.user.id)
         //datos para la construccion del los campos de la tabla usuario_producto
         let usuario_id=usuario.id
         let producto_id=producto.id

         
         
     //crea un campo dentro de usuario_producto tomando 
      //ejemplo//  let usuario_id=usuario.id ==>1
         //let producto_id=producto.id==2

      let visitados = db.usuario_producto.create({
            usuarioId:usuario_id,
            productoId:producto_id
         })
        
         console.log("estes es el mensaje  ==> "+ visitados )
         
         return res.render('productos-detalle', {producto});
        } ,


guardar: (req, res) => {
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