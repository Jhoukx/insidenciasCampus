import { Router } from 'express';
import { createPool } from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const appHardware = Router();
let con = undefined;

const config = JSON.parse(process.env.DATABASE);

appHardware.use((req, res, next) => { 
    con = createPool(config);
    next();
});

appHardware.get('/', (req, res) => { 
    con.query(
    /*SQL*/ `SELECT * FROM hardware`,
        (err, data) => {
            switch (err) {
                case null:
                    res.send(data);
                    break
                default:
                    console.log(err);
                    res.status(404).send();
            }
        }
    )
});
/**
 * Datos principales
 * @param {nombre}
 * @param {creado_por}
 */
appHardware.post('/', (req, res) => {
    con.query(
    /*sql*/ `INSERT INTO hardware SET ?`,
        req.body,
        (err, data) => {
            switch (err) {
                case null:
                    console.log('Los datos se enviaron correctamente :D');
                    res.send();
                    break
                default:
                    console.log(err);
                    res.status(404).send();
            }
        }
    );
 });

export default appHardware;
