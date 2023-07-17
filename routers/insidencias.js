import { Router } from "express";
import { createPool } from "mysql2";
import dotenv from 'dotenv';
dotenv.config();

const appInsidencias = Router();
let con = undefined;

const config = JSON.parse(process.env.DATABASE);
appInsidencias.use((req, res, next) => {
    con = createPool(config);
    next();
});

/**
 * Datos principales 
 * @param {id_categoria}
 * @param {id_tipo_insidencia}
 * @param {id_area}
 * @param {id_trainer}
 */
appInsidencias.post('/', (req, res) => {
    console.log(req.body);
    con.query(
    /*sql*/ `INSERT INTO insidencias SET ?`,
        req.body,
        (err, data) => {
            switch (err) {
                case null:
                    console.log('Se enviaron los datos correctamente');
                    res.send();
                    break
                default:
                    res.status(404).send();
            }
        }
    )
});

export default appInsidencias;