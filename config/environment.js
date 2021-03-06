'use strict';

// Carga las variables en el archivo process.env
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

// Constantes de la aplicación.
const SERVER_PORT = process.env.SERVER_PORT;
const HOST = process.env.DB_HOST;
const DATABASE = process.env.DB_DATABASE;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

// Exportación de las constantes de la aplicación.
export {
    //SECRET,
    SERVER_PORT,
    HOST,
    DATABASE,
    USERNAME,
    PASSWORD
};
