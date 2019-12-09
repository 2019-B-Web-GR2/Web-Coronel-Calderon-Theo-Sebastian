import {Entity, PrimaryGeneratedColumn} from "typeorm";
import {Module} from "@nestjs/common";

@Entity('usuario_web')       // Se definen indices, valores de las columnas, en general las configuraciones
export class UsuarioEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
        name:   'id_web',
        comment: 'Identificador de la tabla usuario',
    })
        id:number;
}

