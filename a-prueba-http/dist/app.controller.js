"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    adiosMundo() {
        const segundos = this.obtenerSegundo();
        if (segundos % 2 === 0) {
            return 'Adios Mundo';
        }
        else {
            throw new common_1.InternalServerErrorException('Es impar');
        }
    }
    obtenerSegundo() {
        return new Date().getSeconds();
    }
    bienvenida(parametrosDeConsulta, nombreUsuario, numeroUsuario, casadoUsuario) {
        console.log(parametrosDeConsulta);
        console.log(typeof numeroUsuario);
        return `Mensaje ${parametrosDeConsulta.nombre} Numero: ${parametrosDeConsulta.numero}`;
    }
    inscripcionCurso(parametrosDeRuta, idCurso, cedula) {
        console.log(parametrosDeRuta);
        return `Te inscribiste al curso: ${idCurso}\n ${cedula}`;
    }
    almorzar(parametrosDeCuerpo, id) {
        console.log(parametrosDeCuerpo);
        return `Te inscribiste al curso: ${parametrosDeCuerpo}`;
    }
    obtenerCabeceras(cabeceras, numeroUno) {
        console.log(cabeceras);
        return `Las cabeceras son: ${numeroUno}`;
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    common_1.HttpCode(200),
    common_1.Post(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "adiosMundo", null);
__decorate([
    common_1.Get('bienvenida'),
    __param(0, common_1.Query()),
    __param(1, common_1.Query('nombre')),
    __param(2, common_1.Query('numero')),
    __param(3, common_1.Query('casado')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", String)
], AppController.prototype, "bienvenida", null);
__decorate([
    common_1.Get('inscripcion-curso/:idCurso/:cedula'),
    __param(0, common_1.Param()),
    __param(1, common_1.Param('idCurso')),
    __param(2, common_1.Param('cedula')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", String)
], AppController.prototype, "inscripcionCurso", null);
__decorate([
    common_1.Post('almorzar'),
    common_1.HttpCode(200),
    __param(0, common_1.Body()),
    __param(1, common_1.Body('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", String)
], AppController.prototype, "almorzar", null);
__decorate([
    common_1.Get('obtener-cabeceras'),
    __param(0, common_1.Headers()),
    __param(1, common_1.Headers('numerouno')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "obtenerCabeceras", null);
AppController = __decorate([
    common_1.Controller('pepito'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map