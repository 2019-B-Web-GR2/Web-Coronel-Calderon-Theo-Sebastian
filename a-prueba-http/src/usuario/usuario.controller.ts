import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";
import {UsuarioEntity} from "./usuario.entity";

@Controller('usuario')
export class UsuarioController {

    constructor(
        private readonly _usuarioService: UsuarioService,
    ) {

    }

    @Post()
    crearUsuario(
        @Body() usuario: UsuarioEntity,
    ): Promise<UsuarioEntity> {
        return this._usuarioService.crearUsuario(usuario);
    }

    // GET /modelo/:id
    @Get(':id')
    obetenerUnUsuario(
        @Param('id') identificador: string,
    ): Promise<UsuarioEntity | undefined> {
        return this._usuarioService
            .encontrarUno(Number(identificador));
    }

    @Get('hola')
    hola(): string {
        return 'HOLA!';
    }

}