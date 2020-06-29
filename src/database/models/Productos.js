module.exports = function(sequelize, dataTypes) {
    
    let alias = 'productos';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        nombre: {
            type: dataTypes.STRING,
        },
        descripcion: {
            type: dataTypes.STRING,
        },
        precio: {
            type: dataTypes.DECIMAL,
        },
        descuento: {
            type: dataTypes.DECIMAL,
        },
        imagen: {
            type: dataTypes.STRING,
        },
        categoria: {
            type: dataTypes.STRING,
        },
        envio: {
            type: dataTypes.DECIMAL,
        },
        stock: {
            type: dataTypes.INTEGER,
        },
        costoenvio: {
            type: dataTypes.INTEGER,
        }
    }

    let config = {
        tableName:'productos',
        timestamps: false,
    }

    let Producto = sequelize.define (alias, cols, config);

    Producto.associate = function (models) {

        Producto.belongsToMany(models.usuarios, {
            as: 'recomendados',
            through: 'usuario_producto',
            foreignKey: 'productoId',
            otherKey: 'usuarioId',
            timestamps: false,
        });

    }

    
    return Producto;
}