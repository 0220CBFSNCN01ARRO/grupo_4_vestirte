module.exports = function(sequelize, dataTypes) {
    
    let alias = 'usuario_producto';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        usuarioId:{
            type: dataTypes.INTEGER,
        },
        productoId:{
            type: dataTypes.INTEGER,

        }
        
    }

    let config = {
        tableName:'usuario_producto',
        timestamps: false,
    }

    let Usuarios_productos = sequelize.define (alias, cols, config);
    
   
    
    return Usuarios_productos;
}