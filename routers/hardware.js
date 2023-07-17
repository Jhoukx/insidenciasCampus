import { Router } from 'express';
import mysql2, { createPool } from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const appHardware = Router();
let con = undefined;

const config = JSON.parse(process.env.DATABASE);

appHardware.use((req, res, next) => { 
    con = createPool(config, req.body);
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


export default appHardware;
