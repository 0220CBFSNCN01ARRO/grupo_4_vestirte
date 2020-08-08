const db = require ('../database/models')

module.exports= {
carrito: async (req, res, next) =>{

    if(isNaN(req.body.juy)){
        return res.send (req.body.juy)
    
    }else{
    
    let productos = [];
    let prody =  await db.productos.findByPk(req.body.juy)
    prody = prody.dataValues 
    productos.push(prody)
    
    return res.render ('carrito', {productos})
    }
},
}