import { Expose,Transform } from "class-transformer";
export class trainers {
    @Expose({ name: 'id' })
    @Transform(({ value }) => {
        if (/^([0-9]|undefined)+$/.test(value)) return value; else throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true })
    ID: number

    @Expose({ name: 'nombre' })
    @Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value)) return value; else throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true })
    NAME: string;

    @Expose({ name: 'id_area' })
    @Transform(({ value }) => {
        if (/^([0-9])+$/.test(value)) return value; else throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true })
    ID_AREA: number
    
    @Expose({ name: 'telefono_movil' })
    @Transform(({ value }) => {
        if (/^([0-9])+|undefined$/.test(value)) return value; else throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true })
    MOBILE_PHONE:number

    @Expose({ name: 'telefono_residencia' })
    @Transform(({ value }) => {
        if (/^([0-9])+|undefined$/.test(value)) return value; else throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true })
    RESIDENCE_PHONE: number 
    
    @Expose({ name: 'telefono_empresa' })
    @Transform(({ value }) => {
        if (/^([0-9])+|undefined$/.test(value)) return value; else throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true })
    COMPANY_PHONE: number
    
    @Expose({ name: 'telefono_movil_empresarial' })
    @Transform(({ value }) => {
        if (/^([0-9])+|undefined$/.test(value)) return value; else throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true })
    COMPANY_MOBILE_PHONE: number
    constructor(p1: number, p2: string, p3: number, p4: number, p5: number, p6: number, p7:number) {
        this.ID = p1;
        this.NAME = p2;
        this.ID_AREA = p3;
        this.MOBILE_PHONE = p4;
        this.RESIDENCE_PHONE = p5;
        this.COMPANY_PHONE = p6;
        this.COMPANY_MOBILE_PHONE = p7;
    }
}