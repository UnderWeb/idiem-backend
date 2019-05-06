'use strict';
import { TipoCliente } from '../config';

// Objeto a exportar.
const tipoClienteCtrl = {};

/**
 * Obtiene todos los tipos de clientes.
 */
tipoClienteCtrl.getTiposClientes = async (request, response, next) => {
    await TipoCliente.findAll().then(tipos => {
        if (!tipos) {
            response.status(404).send({message: 'No existen tipos de clientes en los registros'});
        } else {
            response.status(200).send({tipos});
        }
    }).catch(error => {
        response.status(200).send({message: 'Error en la petición de tipos de clientes: ' + error});
    });
};

// Exporta el objeto controller.
module.exports = tipoClienteCtrl;
