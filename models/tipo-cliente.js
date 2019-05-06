'use strict';

const TipoClienteModel = (sequelize, type) => {
    return sequelize.define('tipo_cliente', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descripcion: {
            type: type.STRING(30),
            allowNull: false
        }
    },{
        timestamps: false,
        freezeTableName: true,
        tableName: 'tipo_cliente'
    });
};

module.exports = TipoClienteModel;
