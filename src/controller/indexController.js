const db = require ('../database/models')

module.exports = {
    root: (req, res) => {
        db.productos.findAll({
            where: {
                categoria: 'destacado'
            }
        })
        .then (function(destacados){
            res.render('index', {destacados:destacados})
        })
    },
}





