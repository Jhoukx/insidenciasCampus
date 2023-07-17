import {plainToClass} from 'class-transformer'
import { insidencias } from '../controller/insidencias.js';
export function proxyInsidencias(req, res,next) {
    try {
        let classInsidencias = plainToClass(insidencias, req.body);
        console.log(classInsidencias);
        next();
    } catch (error) {
        console.log(error);
        res.status(404).send();
    }
}