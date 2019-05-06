'use strict';
import Sequelize from 'sequelize';
import { TipoUsuarioModel, TipoClienteModel, UsuarioModel } from '../models';

// Importa las constantes del sistema referente a la conexión a la base de datos.
import { HOST, DATABASE, USERNAME, PASSWORD } from './environment';

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
    host: HOST,
    dialect: 'mysql',
    define: {
        underscored: true
      }
});

const Usuario = UsuarioModel(sequelize, Sequelize);
const TipoUsuario = TipoUsuarioModel(sequelize, Sequelize);
const TipoCliente = TipoClienteModel(sequelize, Sequelize);

Usuario.belongsTo(TipoUsuario, {foreignKey: 'id_tipo_usuario'});
TipoUsuario.hasMany(Usuario, {foreignKey: 'id_tipo_usuario'});
Usuario.belongsTo(TipoCliente, {foreignKey: 'id_tipo_cliente'});
TipoCliente.hasMany(Usuario, {foreignKey: 'id_tipo_cliente'});

sequelize.sync().then(() => {
    console.log('Waiting for connections on DB...');
}).catch(error => {
    console.log(`Error al conectarse a la base de datos: ${error}`)
});

export {
    Usuario,
    TipoUsuario,
    TipoCliente
}
