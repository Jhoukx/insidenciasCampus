import { Transform,Expose } from "class-transformer";
export class insidencias {
    @Expose({ name: 'id' })
    @Transform(({ value }) => {
        if (/^([0-9]|undefined)+$/.test(value)) return value; else throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true })
    ID: number

    @Expose({ name: 'id_categoria' })
    @Transform(({ value }) => {
        if (/^([0-9])+$/.test(value)) return value; else throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true })
    ID_CATEGORY: number

    @Expose({ name: 'id_tipo_insidencia' })
    @Transform(({ value }) => {
        if (/^([0-9])+$/.test(value)) return value; else throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true })
    ID_INSIDENCE_TYPE: number
    
    @Expose({ name: 'descripcion' })
    @Transform(({ value }) => {
        if (/^[a-z A-Z]|undefined$/.test(value)) return value; else throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true })
    DESCRIPTION:string

    @Expose({ name: 'fecha_reporte' })
    @Transform(({ value }) => {
        if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}|undefined$/.test(value)) return value; else throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true })
    DATE_REPORT:string

    @Expose({ name: 'id_area' })
    @Transform(({ value }) => {
        if (/^([0-9])+$/.test(value)) return value; else throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true })
    ID_AREA: number
    
    @Expose({ name:'id_trainer'})
    @Transform(({ value }) => {
        if (/^([0-9])+$/.test(value)) return value; else throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true })
    ID_TRAINER: number
    constructor(p1:number,p2:number,p3:number,p4:string,p5:string,p6:number,p7:number) {
        this.ID = p1;
        this.ID_CATEGORY = p2;
        this.ID_INSIDENCE_TYPE = p3;
        this.DESCRIPTION = p4;
        this.DATE_REPORT = p5;
        this.ID_AREA = p6;
        this.ID_TRAINER = p7;
    }
}