'use strict';
import Sequelize from 'sequelize';
import { Usuario, TipoUsuario, TipoCliente } from '../config';

// Objeto a exportar.
const usuarioCtrl = {};

// Operadores de condición.
const Op = Sequelize.Op

/**
 * Obtiene todos los usuarios.
 */
usuarioCtrl.getUsuarios = async (request, response, next) => {
    await Usuario.findAll({
        include: [
            TipoUsuario,
            TipoCliente
        ]
    }).then(usuarios => {
        if (!usuarios) {
            response.status(404).send({message: 'No existen usuarios en los registros'});
        } else {
            response.status(200).send({usuarios});
        }
    }).catch(error => {
        response.status(200).send({message: 'Error en la petición usuarios: ' + error});
    });
};

/**
 * Obtiene un usuario específico.
 */
usuarioCtrl.getUsuarioById = async (request, response, next) => {
    // Obtiene el id del usuario específico.
    const usuarioId = request.params.id;console.log(usuarioId)

    if (!usuarioId) {
        return response.status(404).status({message: 'El usuario no existe en los registros'});
    } else {
        await Usuario.findByPk(usuarioId).then(usuario => {
            if (!usuario) {
                response.status(404).send({message: 'No existen usuarios que cumplan con la petición'});
            } else {
                response.status(200).send({usuario});
            }
        }).catch(error => {
            response.status(200).send({message: 'Error en la petición del usuario: ' + error});
        });
    }
};

/**
 * Comprueba la existencia del usuario.
 */
usuarioCtrl.getCorreo = async (request, response, next) => {
    // Obtiene el id del usuario.
    const usuarioId = request.params.id;

    // Obtiene los parámentos de validación.
    const params = request.params;console.log(usuarioId)

    // Comprueba el ingreso de los datos mínimos.
    if (params.correo) {
        // Asigna el valor del correo electrónico.
        const correo = params.correo.toLowerCase();

        // Comprueba la existencia del usuario mediante su título.
        if (usuarioId == 'null') {
            await Usuario.findOne({
                where: {
                    correo: correo
                }
            }).then(usuario => {
                if (!usuario) {
                    response.status(200).send({valid: null});
                } else {
                    response.status(200).send({valid: true});
                }
            }).catch(error => {
                response.status(200).send({message: 'Error en la validación del usuario al crear: ' + error});
            });
        } else {
            await Usuario.findOne({
                where: {
                    correo: correo,
                    id: {[Op.ne]: usuarioId}
                }
            }).then(usuario => {
                if (!usuario) {
                    response.status(200).send({valid: null});
                } else {
                    response.status(200).send({valid: true});
                }
            }).catch(error => {
                response.status(200).send({message: 'Error en la validación del usuario al actualizar: ' + error});
            });
        }
        
    } else {
        response.status(200).send({valid: null});
    }
};

/**
 * Creación de usuarios.
 */
usuarioCtrl.createUsuario = async (request, response, next) => {
    // Obtiene los parámentos de registro.
    const params = request.body;

    // Comprueba el ingreso de los datos mínimos.
    if (params.nombre && params.apellido_paterno && params.apellido_materno && params.correo && params.id_tipo_usuario && params.id_tipo_cliente) {

        /**
         * Ingresa un nuevo usuario.
         */
        await Usuario.create({
            nombre: params.nombre,
            apellido_paterno: params.apellido_paterno,
            apellido_materno: params.apellido_materno,
            correo: params.correo,
            id_tipo_usuario: params.id_tipo_usuario,
            id_tipo_cliente: params.id_tipo_cliente
        }).then(usuario => {
            response.status(200).send({usuario: usuario});
        }).catch(error => {
            response.status(200).send({message: 'Error al crear el usuario: ' + error});
        });
    } else {
        response.status(200).send({message: 'Introduce los datos correctamente para registrar al usuario'});
    }
};

/**
 * Actualización de usuarios.
 */
usuarioCtrl.updateUsuario = async (request, response, next) => {
    // Obtiene el id del usuario a actualizar.
    const usuarioId = request.params.id;

    // Obtiene los parámentos de actualización.
    const params = request.body;

    if (!usuarioId) {
        return response.status(404).status({message: 'El usuario no existe en los registros'});
    } else {
        await Usuario.update({
            nombre: params.nombre,
            apellido_paterno: params.apellido_paterno,
            apellido_materno: params.apellido_materno,
            correo: params.correo,
            id_tipo_usuario: params.id_tipo_usuario,
            id_tipo_cliente: params.id_tipo_cliente
        },
        {
            where: {
                id: usuarioId
            }
        }).then((usuario) => {
            return response.status(200).send({usuario: usuario});
        }).catch(error => {
            response.status(200).send({message: 'Error al crear el usuario: ' + error});
        });
    }
}

/**
 * Actualización del estado del usuarios.
 */
usuarioCtrl.updateEstadoUsuario = async (request, response, next) => {
    // Obtiene el id del usuario a actualizar.
    const usuarioId = request.params.id;

    // Obtiene los parámentos de actualización.
    const params = request.body;

    if (!usuarioId) {
        return response.status(404).status({message: 'El usuario no existe en los registros'});
    } else {
        await Usuario.update({
            estado: params.estado
        },
        {
            where: {
                id: usuarioId
            }
        }).then((usuario) => {
            return response.status(200).send({usuario: usuario});
        }).catch(error => {
            response.status(200).send({message: 'Error al cambiar el estado al usuario: ' + error});
        });
    }
}

// Exporta el objeto controller.
module.exports = usuarioCtrl;
