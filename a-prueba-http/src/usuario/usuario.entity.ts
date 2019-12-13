import {Column, Entity, Index, PrimaryGeneratedColumn} from "typeorm";
import {Module} from "@nestjs/common";

@Entity('usuario_web')       // Se definen indices, valores de las columnas, en general las configuraciones
export class UsuarioEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
        name: 'id_web',
        comment: 'Identificador de la tabla usuario',
    })
    id: number;

    @Index({
        unique: false,
    })
    @Column(
        {
            type: 'varchar',
            nullable: true,
            name: 'nombre',
            comment: 'Nombre de la tabla usuario',
        }
    )
    nombre?: string;

    @Index({
        unique: true,
    })
    @Column(
        {
            type: 'varchar',
            unsigned: false,
            name: 'cedula',
            comment: 'Cedula de la tabla usuario',
        }
    )
    cedula: string

}

