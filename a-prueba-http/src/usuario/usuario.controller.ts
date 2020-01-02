import {Body, Controller, Get, Param, Post, Put} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";
import {UsuarioEntity} from "./usuario.entity";
import {DeleteResult} from "typeorm";

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

@Put (':id')
    actualizarUsuario(
        @Body() usuario: UsuarioEntity,
        @Param('id') id: string,
    ): Promise<UsuarioEntity> {
        return this._usuarioService
            .actualizarUsuario(
                +id,
                usuario
            );
    }

    @Delete ('id')
    eliminarUno(
        @Param ('id') id: string,
    ): Promise <DeleteResult> {
        return this._usuarioService
            .borrarUsuario(
                +id
            );*
    }


    @Get('hola')
    hola(): string {
        return 'HOLA!';
    }

}
