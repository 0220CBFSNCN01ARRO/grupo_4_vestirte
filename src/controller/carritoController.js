const db = require ('../database/models')

module.exports= {
carrito: async (req, res, next) =>{
    let productos =  await db.productos.findAll()
    res.render ('carrito',{productos})
}}
