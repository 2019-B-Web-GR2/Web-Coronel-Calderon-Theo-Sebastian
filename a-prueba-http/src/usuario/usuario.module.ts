import {Module} from '@nestjs/common';
// @ts-ignore
import {AppController} from './app.controller';
// @ts-ignore
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
// @ts-ignore
import {UsuarioEntity} from "./usuario/usuario.entity";
// @ts-ignore
import {UsuarioModule} from "./usuario/usuario.module";
// @ts-ignore
import {UsuarioService} from "./usuario/usuario.service";

@Module({
    imports: [
        UsuarioModule,
        TypeOrmModule.forRoot(
            {
                type: 'mysql',
                host: 'localhost',
                port: 32769,
                username: 'theo',
                password: 'admin123',
                database: 'web',
                entities: [
                    UsuarioEntity,
                ],
                synchronize: true, // Crear -> true , Conectar -> false
            }
        ),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    constructor(
        private _usuarioService: UsuarioService,
    ) {

    }
}
