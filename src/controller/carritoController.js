const db = require ('../database/models')

module.exports= {
carrito: async (req, res, next) =>{

    let productos = [];
    let qty = [];

    if (req.body.juy || req.body.car){
    if (req.body.juy) {pabuscar = JSON.parse(req.body.juy)}
    if (req.body.car) {pabuscar = JSON.parse(req.body.car)}
    for (prod of pabuscar){
    let prodyg = {};
    let prody =  await db.productos.findByPk(prod.id)
    qty = prod.qty
    prody = prody.dataValues
    prodyg = {...prody, qty}
    productos.push (prodyg)
    }
return res.render ('carrito', {productos})

} else {
    
    return res.render ('carrito', {productos})
}
},
}