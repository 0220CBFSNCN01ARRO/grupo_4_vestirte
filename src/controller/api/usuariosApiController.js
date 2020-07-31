const db = require ('../../database/models')

module.exports= {
list: (req, res) => {
    db.usuarios.findAll()
    .then (function(usuarios){
        let respuesta = usuarios;

        res.json({
            meta:{
                status: 200,
                totalItems: respuesta.length,
                link: '/api/usuarios'
            },
            data: respuesta.map(resp => {
                return {
                    nombre:res.pnombre,
                    apellido: resp.apellido,
                    email: resp.email,
                    link: `/api/usuarios/${resp.id}`
                }
            })
    })
})
}
}