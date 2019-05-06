'use strict';
import express from 'express';
import { tipoClienteCtrl } from '../controllers';

const tipoClienteRouter = express.Router();

tipoClienteRouter.get('/tiposclientes', tipoClienteCtrl.getTiposClientes);

module.exports = tipoClienteRouter;
