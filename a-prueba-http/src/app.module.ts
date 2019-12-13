import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario/usuario.entity";
import {UsuarioService} from "./usuario/usuario.service";

@Module({
    imports: [
        TypeOrmModule.forRoot(
            {
                type: 'mysql',
                host: 'localhost',
                port: 32797,
                username: 'admin',
                password: '1234',
                database: 'web',
                dropSchema: true,
                entities: [
                    UsuarioEntity
                ],
                synchronize: true, // Crear -> true , Conectar -> false
            }
        )
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {

    constructor(
        private _usuarioService: UsuarioService,
    ) {
        const usuario = this._usuarioService
            .encontrarUno(1)
            .then()
            .catch();

    }
}