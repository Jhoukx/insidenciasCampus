import { plainToClass} from 'class-transformer';
import { hardware } from '../controller/hardware.js';

export function proxyHardware(req, res, next){
    try {
        let classHardware = plainToClass(hardware, req.body);
        console.log(classHardware);
        next();
    } catch (error) {
        console.log(error);
        res.status(404).send(error.message);
    }    
}