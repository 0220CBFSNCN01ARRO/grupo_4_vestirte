//***MODULE REQUIRE***//
const db = require ('../../database/models')


//***CONTROLLER METHODS***//

module.exports= {
    
    cards:async (req, res) => {
    //suma de usuarios
    const sumaUser = await db.usuarios.findAll();
    const sumados = sumaUser.length

        //suma los productos y users
    const sumaproducto= await db.productos.findAll();
    let amount = 0
    const sumaproduct = sumaproducto.length
    
    sumaproducto.map(product => amount += product.precio)
    console.log(amount);
    
    res.json({
        meta:{
            status: 200,
            link: '/api/dashboard/cards'
           
        },
        data: [
            {
            text:'Products in Data Base',
            value:sumaproduct,
            icon:"fa-clipboard-list"
        },
            {
            type: 'success',
            text:'Amount in Products',
            value:'$'+ amount,
            icon:"fa-dollar-sign-list"
        },
        {
            type: 'warning',
        value:sumados,
        text:'Users quantity',
        icon:"fa-user-check"
        }




        ]})



}}