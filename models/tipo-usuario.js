'use strict';

const TipoUsuarioModel = (sequelize, type) => {
    return sequelize.define('tipo_usuario', {
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
        tableName: 'tipo_usuario'
    });
};

module.exports = TipoUsuarioModel;
