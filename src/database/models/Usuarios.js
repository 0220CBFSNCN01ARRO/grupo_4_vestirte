module.exports = function(sequelize, dataTypes) {
    
    let alias = 'usuarios';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        nombre: {
            type: dataTypes.STRING,
        },
        apellido: {
            type: dataTypes.STRING,
        },
        email: {
            type: dataTypes.STRING,
        },
        categoria: {
            type: dataTypes.STRING,
        },
        password: {
            type: dataTypes.STRING,
        },
        image: {
            type: dataTypes.STRING,
        },
    }

    let config = {
        tableName:'usuarios',
        timestamps: false,
    }

    let Usuarios = sequelize.define (alias, cols, config);
    
    Usuarios.associate = function (models) {
        Usuarios.belongsToMany(models.productos, {
            as: 'visitados',
            through: 'usuario_producto',
            foreignKey: 'usuarioId',
            otherKey: 'productoId',
            timestamps: false,
        });
    }
    return Usuarios;
}