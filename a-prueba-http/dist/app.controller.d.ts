import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    adiosMundo(): string;
    private obtenerSegundo;
    bienvenida(parametrosDeConsulta: ObjetoBienvenida, nombreUsuario: string, numeroUsuario: string, casadoUsuario: string): string;
    inscripcionCurso(parametrosDeRuta: ObjetoInscripcion, idCurso: string, cedula: string): string;
    almorzar(parametrosDeCuerpo: any, id: number): string;
    obtenerCabeceras(cabeceras: any, numeroUno: string): string;
}
interface ObjetoInscripcion {
    idCurso: string;
    cedula: string;
}
interface ObjetoBienvenida {
    nombre?: string;
    numero?: string;
    casado?: string;
}
export {};
