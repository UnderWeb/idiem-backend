'use strict';
import { TipoUsuario } from '../config';

// Objeto a exportar.
const tipoUsuarioCtrl = {};

/**
 * Obtiene todos los tipos de usuarios.
 */
tipoUsuarioCtrl.getTiposUsuarios = async (request, response, next) => {
    await TipoUsuario.findAll().then(tipos => {
        if (!tipos) {
            response.status(404).send({message: 'No existen tipos de usuarios en los registros'});
        } else {
            response.status(200).send({tipos});
        }
    }).catch(error => {
        response.status(200).send({message: 'Error en la petición de tipos de usuarios: ' + error});
    });
};

// Exporta el objeto controller.
module.exports = tipoUsuarioCtrl;
