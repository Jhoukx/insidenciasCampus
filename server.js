import express from 'express';
import dotenv from 'dotenv';
import appHardware  from './routers/hardware.js';
dotenv.config();
const appServer = express();

appServer.use(express.json());

appServer.use('/hardware', appHardware);

const config = JSON.parse(process.env.SERVER);

appServer.listen(config, () => {
    console.log(`Server is running on http://${config.host}:${config.port}`);
})

