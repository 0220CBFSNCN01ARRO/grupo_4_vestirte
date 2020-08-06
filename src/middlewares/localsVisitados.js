const db = require ('../database/models')

module.exports = async (req, res, next) => {
    let ultimosVisitados= await db.productos.findByPk(req.params.productoId)
    let vistos = ultimosVisitados.datavalues
    console.log(vistos)
    return next();
};