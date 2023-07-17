var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from 'class-transformer';
export class hardware {
    constructor(p1, p2, p3, p4) {
        this.ID = p1;
        this.NAME = p2;
        this.CREATED_BY = p3;
        this.UPDATED_BY = p4;
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
], hardware.prototype, "ID", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    Transform(({ value }) => {
        if (/^[a-z A-Z]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], hardware.prototype, "NAME", void 0);
__decorate([
    Expose({ name: 'creado_por' }),
    Transform(({ value }) => {
        if (/^([0-9])+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], hardware.prototype, "CREATED_BY", void 0);
__decorate([
    Expose({ name: 'actualizado_por' }),
    Transform(({ value }) => {
        if (/^([0-9]|undefined)+$/.test(value))
            return value;
        else
            throw { status: 400, message: `El dato ${value} no coincide con el parametro aceptado` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], hardware.prototype, "UPDATED_BY", void 0);
