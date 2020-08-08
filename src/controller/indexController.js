const db = require ('../database/models')
const { sequelize } = require('../database/models')


module.exports = {
    root: async (req, res) => {
        
        
        let destacados = await db.productos.findAll({
            where: {
                categoria: 'destacado'
            }
        })

        if (res.locals.user ){pendorcho=res.locals.user.id} else {pendorcho=1}

        let visitados = await db.usuarios.findAll(
            {
                where: {
                    id: pendorcho
                },
                
                include:'visitados'
        })

        return res.render('index', {destacados, visitados})
    }
}
