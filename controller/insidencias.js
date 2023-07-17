var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Transform, Expose } from "class-transformer";
export class insidencias {
    constructor(p1, p2, p3, p4, p5, p6, p7) {
        this.ID = p1;
        this.ID_CATEGORY = p2;
        this.ID_INSIDENCE_TYPE = p3;
        this.DESCRIPTION = p4;
        this.DATE_REPORT = p5;
        this.ID_AREA = p6;
        this.ID_TRAINER = p7;
    }
}
__decorate([
    Expose({ name: 'id' }),
    Transform(({ value }) => {
        if (/^([0-9]|undefined)+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], insidencias.prototype, "ID", void 0);
__decorate([
    Expose({ name: 'id_categoria' }),
    Transform(({ value }) => {
        if (/^([0-9])+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], insidencias.prototype, "ID_CATEGORY", void 0);
__decorate([
    Expose({ name: 'id_tipo_insidencia' }),
    Transform(({ value }) => {
        if (/^([0-9])+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], insidencias.prototype, "ID_INSIDENCE_TYPE", void 0);
__decorate([
    Expose({ name: 'descripcion' }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]|undefined$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], insidencias.prototype, "DESCRIPTION", void 0);
__decorate([
    Expose({ name: 'fecha_reporte' }),
    Transform(({ value }) => {
        if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}|undefined$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], insidencias.prototype, "DATE_REPORT", void 0);
__decorate([
    Expose({ name: 'id_area' }),
    Transform(({ value }) => {
        if (/^([0-9])+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], insidencias.prototype, "ID_AREA", void 0);
__decorate([
    Expose({ name: 'id_trainer' }),
    Transform(({ value }) => {
        if (/^([0-9])+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], insidencias.prototype, "ID_TRAINER", void 0);
