'use strict';

const UsuarioModel = (sequelize, type) => {
    return sequelize.define('usuario', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: type.STRING(30),
            allowNull: false
        },
        apellido_paterno: {
            type: type.STRING(30),
            allowNull: false
        },
        apellido_materno: {
            type: type.STRING(30),
            allowNull: false
        },
        correo: {
            type: type.STRING(30),
            allowNull: false,
            unique: true
        },
        estado: {
            type: type.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        id_tipo_usuario: {
            type: type.INTEGER,
            allowNull: false,
            references: {
                model: 'tipo_usuario',
                key: 'id'
            }
        },
        id_tipo_cliente: {
            type: type.INTEGER,
            allowNull: false,
            references: {
                model: 'tipo_cliente',
                key: 'id'
            }
        }
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'usuario'
    });
};

module.exports = UsuarioModel;
