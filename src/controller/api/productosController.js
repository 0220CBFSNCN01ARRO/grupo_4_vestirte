//***MODULE REQUIRE***//
const db = require ('../../database/models')


//***CONTROLLER METHODS***//

module.exports= {


list: (req, res) => {
    db.productos.findAll()
    .then (function(productos){
        let respuesta = productos;

        res.send(respuesta)
    })
},
detalle: async (req, res) => {
    let producto= await db.productos.findByPk(req.params.productoId)
    return res.json(producto);
   } 
}