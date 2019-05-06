'use strict';
import express from 'express';
import { tipoUsuarioCtrl } from '../controllers';

const tipoUsuarioRouter = express.Router();

tipoUsuarioRouter.get('/tiposusuarios', tipoUsuarioCtrl.getTiposUsuarios);

module.exports = tipoUsuarioRouter;
