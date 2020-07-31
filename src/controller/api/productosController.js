//***MODULE REQUIRE***//
const db = require ('../../database/models')


//***CONTROLLER METHODS***//

module.exports= {


list: (req, res) => {
    db.productos.findAll()
    .then (function(productos){
        let respuesta = productos;

        res.json({
            meta:{
                status: 200,
                totalItems: respuesta.length,
                link: '/api/productos'
            },
            data: respuesta.map(resp => {
                return {
                    nombre:resp.nombre,
                    descripcion:resp.descripcion,
                    precio:resp.precio,
                    descuento:resp.descuento,
                    categoria:resp.categoria,
                    envio:resp.envio,
                    stock:resp.stock,
                    link: `/api/productos/${resp.id}`
                }
            })
    })
})
}
,
detalle: async (req, res) => {
    let producto= await db.productos.findByPk(req.params.productoId)
    return res.json({
        meta:{
            status: 200,
            link: '/api/productos/'+ req.params.productoId
        },
        data:  {
                nombre:producto.nombre,
                descripcion:producto.descripcion,
                precio:producto.precio,
                descuento:producto.descuento,
                categoria:producto.categoria,
                envio:producto.envio,
                stock:producto.stock,
                link: `/api/productos/detalles/${producto.id}`
            }
        })
}
   
}
