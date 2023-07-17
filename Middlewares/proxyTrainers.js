import { plainToClass } from "class-transformer";
import {trainers} from '../controller/trainers.js'
export function proxytrainers (req,res,next) {
    try {
        let classTrainers = plainToClass(trainers, req.body); 
        console.log(classTrainers);
        next();
    } catch (error) {
        console.log(error);
        res.status(404).send();
    }
}