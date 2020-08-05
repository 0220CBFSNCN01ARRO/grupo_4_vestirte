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
            image: `/img/img-users/${usuario.image}`,
            link: `/api/usuarios/${usuario.id}`
            }
        })
},
ultimo: async (req, res) => {
    let usuario= await db.usuarios.findAll()

    var max = usuario.reduce(function(prev, current) {
        if (current.id > prev.id) {
            return current;
        } else {
            return prev;
        }
    });
    
    res.json({
        meta:{
            status: 200,
            link: '/api/usuarios/'+ max.id
        },
        data:  {
            id: max.id,
            nombre: max.nombre,
            apellido: max.apellido,
            email: max.email,
            image: `/img/img-users/${max.image}`,
            link: `/api/usuarios/${max.id}`
            }
        })
}
}