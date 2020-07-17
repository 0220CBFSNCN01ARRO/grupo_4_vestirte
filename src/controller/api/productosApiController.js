//***MODULE REQUIRE***//
const db = require ('../database/models')


//***CONTROLLER METHODS***//

module.exports= {

    
index: async (req,res)=>{
    const productos = await db.productos.findAll();
    res.json({
        meta:{
            status: 200,
            totalItems: productos.length,
            link: '/api/productos'
        },
        data: productos(movie => {productos
           
        }) 
    });
}
}