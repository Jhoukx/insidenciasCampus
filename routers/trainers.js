import { Router } from 'express';
import { createPool } from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const appTrainers = Router();
let con = undefined;

const config = JSON.parse(process.env.DATABASE);
appTrainers.use((req, res, next) => {
    con = createPool(config);
    next();
});

/**
 * Datos principales
 * @param {nombre}
 * @param {id_area}
 */
appTrainers.post('/', (req, res) => {
    con.query(
    /*sql*/ `INSERT INTO trainers SET ?`,
        req.body,
        (err, data) => {
            switch (err) {
                case null:
                    console.log('Los datos se enviaron correctamente :D');
                    res.send();
                    break
                default:
                    res.status(404).send();
            }
        }
    )
 });

export default appTrainers;