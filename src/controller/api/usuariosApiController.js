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
                    nombre:resp.nombre,
                    apellido: resp.apellido,
                    email: resp.email,
                    link: `/api/usuarios/${resp.id}`
                }
            })
    })
})
},
detalle: async (req, res) => {
    let usuario= await db.usuarios.findByPk(req.params.usuariosId)
    return res.json({
        meta:{
            status: 200,
            link: '/api/usuarios/'+ req.params.usuariosId
        },
        data:  {
            id:usuario.id,
            nombre:usuario.nombre,
            apellido: usuario.apellido,
            email: usuario.email,
            password: usuario.password,
            categoria: usuario.categoria,
            image: usuario.image,
            link: `/api/usuarios/${usuario.id}`
            }
        })
}
}