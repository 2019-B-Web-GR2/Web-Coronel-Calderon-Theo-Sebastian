import {
    BadRequestException, Body,
    Controller,
    Get, Headers,
    HttpCode,
    InternalServerErrorException, Param,
    Post,
    Query
} from '@nestjs/common';
import {AppService} from './app.service';

// @ts-ignore
// @ts-ignore
@Controller('pepito')   //Decorador que puede o no recibir parametros  ->  segmento de la URL "/"
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()  // -> url "/"
    getHello(): string {
        return this.appService.getHello();
    }


    @HttpCode(200)
    @Post()
    adiosMundo(): string {
        const segundos = this.obtenerSegundo();
        if (segundos % 2 === 0) {
            return 'Adios Mundo';

        } else {
            throw new InternalServerErrorException(
                'Es impar'
            );
        }


    }


    private obtenerSegundo(): number {
        return new Date().getSeconds();
    }


    @Get('bienvenida')
    public bienvenida(
        @Query()
            parametrosDeConsulta: ObjetoBienvenida,
        @Query('nombre')
            nombreUsuario: string,
        @Query('numero')
            numeroUsuario: string,
        @Query('casado')
            casadoUsuario: string,
    ):
        string {
        console.log(parametrosDeConsulta);
        console.log(typeof numeroUsuario);
        // template strings \\ `Mensaje ${variable}`
        return `Mensaje ${parametrosDeConsulta.nombre} Numero: ${parametrosDeConsulta.numero}`;
    }

    @Get('inscripcion-curso/:idCurso/:cedula') //  "/:nombreParametro"
    public inscripcionCurso(
        @Param()
            parametrosDeRuta: ObjetoInscripcion,
        @Param('idCurso')
            idCurso: string,
        @Param('cedula')
            cedula: string
    ): string {
        console.log(parametrosDeRuta);
        return `Te inscribiste al curso: ${idCurso}\n ${cedula}`;
    }

    @Post('almorzar')
    @HttpCode(200)
    public almorzar(
        @Body()
            parametrosDeCuerpo,
        @Body('id')
            id: number, // Objeto :D Arreglo D:
    ):
        string {
        console.log(parametrosDeCuerpo);
        return `Te inscribiste al curso: ${parametrosDeCuerpo}`;
    }

    @Get('obtener-cabeceras')
    obtenerCabeceras(
        @Headers()
            cabeceras,
        @Headers('numerouno')
            numeroUno: string,
    ) {
        console.log(cabeceras);
        return `Las cabeceras son: ${numeroUno}`;
    }
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





/*    TYPESCRIPT
let nombre: string = "Theo";
const apellido: string = "Coronel";
let cedula: string = "1723...";

class Usuario {
    constructor(
        // public cedula: string,
        public nombre: string,
        public apellido: string,
    ) {

    }
}

const Theo = new Usuario("Theo","Coronel");

class Empleado extends Usuario{
    constructor(
        nombre:string,
        public numeroContrato:string,
        apellido?:string,
    ){
      super(nombre,apellido);
    }
}

const empleadoTheo = new Empleado("Theo", "1234565", "Coronel");

interface Pelota{
  diametro:number;
  color?:string;
}

interface Entrenador{
  id:number;
  nombre:string;
}

interface Pokemon{
  id:number;
  nombre:string;
  entrenador:Entrenador | number; //Foreign Key
}

const ash:Entrenador={
  id:1,
  nombre:'Ash',
};

const pikachu:Pokemon = {
  id:1,
  nombre:'Pikachu',
  entrenador: 1,
};

const suma = pikachu.entrenador as number + pikachu.id;

*/



