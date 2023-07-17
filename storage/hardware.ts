import {Expose,Transform } from 'class-transformer';
export class hardware {
    @Expose({ name: 'id' })
    @Transform(({ value }) => {
        if (/^([0-9]|undefined)+$/.test(value)) return value; else throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, {toClassOnly:true})
    ID: number
    
    @Expose({name:'nombre'})
    @Transform(({ value}) => {
        if (/^[a-z A-Z]+$/.test(value)) return value; else throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    },{toClassOnly:true})
    NAME: string
    
    @Expose({ name: 'creado_por' })
    @Transform(({ value }) => {
        if (/^([0-9])+$/.test(value)) return value; else throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true })
    CREATED_BY: number

    @Expose({ name: 'actualizado_por' })
    @Transform(({ value }) => {
        if (/^([0-9]|undefined)+$/.test(value)) return value; else throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true })
    UPDATED_BY: number
    constructor(p1:number,p2:string,p3:number,p4:number) {
        this.ID = p1;
        this.NAME = p2;
        this.CREATED_BY = p3;
        this.UPDATED_BY = p4;
    }
}