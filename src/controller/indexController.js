const db = require ('../database/models')
const { sequelize } = require('../database/models')


module.exports = {
    root: async (req, res) => {
        let destacados = await db.productos.findAll({
            where: {
                categoria: 'destacado'
            }
        })

        if (res.locals.user){pendorcho=res.locals.user.id} else {pendorcho=null}
        
        let visitados = await db.sequelize.query (`SELECT * FROM usuario_producto, usuarios, productos WHERE usuarioId = usuarios.id
        AND productoId = productos.id
        AND usuario_producto.usuarioId = ${pendorcho}`
        )

        return res.render('index', {destacados, visitados})
    },
}
