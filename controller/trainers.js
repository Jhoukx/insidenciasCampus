var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from "class-transformer";
export class trainers {
    constructor(p1, p2, p3, p4, p5, p6, p7) {
        this.ID = p1;
        this.NAME = p2;
        this.ID_AREA = p3;
        this.MOBILE_PHONE = p4;
        this.RESIDENCE_PHONE = p5;
        this.COMPANY_PHONE = p6;
        this.COMPANY_MOBILE_PHONE = p7;
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
], trainers.prototype, "ID", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], trainers.prototype, "NAME", void 0);
__decorate([
    Expose({ name: 'id_area' }),
    Transform(({ value }) => {
        if (/^([0-9])+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], trainers.prototype, "ID_AREA", void 0);
__decorate([
    Expose({ name: 'telefono_movil' }),
    Transform(({ value }) => {
        if (/^([0-9])+|undefined$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], trainers.prototype, "MOBILE_PHONE", void 0);
__decorate([
    Expose({ name: 'telefono_residencia' }),
    Transform(({ value }) => {
        if (/^([0-9])+|undefined$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], trainers.prototype, "RESIDENCE_PHONE", void 0);
__decorate([
    Expose({ name: 'telefono_empresa' }),
    Transform(({ value }) => {
        if (/^([0-9])+|undefined$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], trainers.prototype, "COMPANY_PHONE", void 0);
__decorate([
    Expose({ name: 'telefono_movil_empresarial' }),
    Transform(({ value }) => {
        if (/^([0-9])+|undefined$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], trainers.prototype, "COMPANY_MOBILE_PHONE", void 0);
