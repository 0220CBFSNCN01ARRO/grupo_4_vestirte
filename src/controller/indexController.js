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

        // no lo aplicamos asi porque la PK no puede ser null, queda para el proximo sprint
        // let visitados = await db.usuarios.findAll(
        //     {
        //         where: {
        //             id: req.session.user.id
        //         },
                
        //         include:'visitados'
        // })
        
       
        // res.send(visitados)}}

        return res.render('index', {destacados, visitados, pendorcho})
    },
}
