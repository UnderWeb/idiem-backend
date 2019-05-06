'use strict';
import express from 'express';
import { usuarioCtrl } from '../controllers';

const usuarioRouter = express.Router();

usuarioRouter.get('/usuarios', usuarioCtrl.getUsuarios);
usuarioRouter.get('/usuarios/:id', usuarioCtrl.getUsuarioById);
usuarioRouter.get('/usuarios/correo/:correo/:id', usuarioCtrl.getCorreo);
usuarioRouter.post('/usuarios', usuarioCtrl.createUsuario);
usuarioRouter.put('/usuarios/:id', usuarioCtrl.updateUsuario);
usuarioRouter.patch('/usuarios/:id', usuarioCtrl.updateEstadoUsuario);

module.exports = usuarioRouter;
