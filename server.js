import express from 'express';
import dotenv from 'dotenv';
import appHardware  from './routers/hardware.js';
import appTrainers from './routers/trainers.js';
import appInsidencias from './routers/insidencias.js'
import {proxyHardware} from './Middlewares/proxyHardware.js'
import {proxyInsidencias} from './Middlewares/proxyInsidencias.js'
dotenv.config();
const appServer = express();

appServer.use(express.json());

appServer.use('/hardware',proxyHardware,appHardware);
appServer.use('/trainers',appTrainers);
appServer.use('/insidencias', proxyInsidencias,appInsidencias);

const config = JSON.parse(process.env.SERVER);

appServer.listen(config, () => {
    console.log(`Server is running on http://${config.host}:${config.port}`);
})

