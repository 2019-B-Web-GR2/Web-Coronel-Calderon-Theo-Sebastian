import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {DeleteResult, Repository} from "typeorm";

@Injectable()
export class UsuarioService {
    constructor(
        // Inyectar Dependecias
        @InjectRepository(UsuarioEntity)
        private _repositorioUsuario: Repository<UsuarioEntity> //Tambien puede ser publico
    ) {

    }

    encontrarUno(id: number): Promise<UsuarioEntity> | undefined {
        return this._repositorioUsuario.findOne(id);
    }

    crearUsuario(usuario: UsuarioEntity) {
        return this._repositorioUsuario.save<UsuarioEntity>(usuario);
    }

    borrarUsuario(id: number): Promise<DeleteResult> {
        return this._repositorioUsuario.delete(id);
    }

    actualizarUsuario(id: number, usuario: UsuarioEntity): Promise<UsuarioEntity> {
        usuario.id = id;
        return this._repositorioUsuario
            .save(usuario); //upsert
    }

    buscar(
        where: UsuarioEntity | UsuarioEntity[],
        skip: number = 0,
        take: number = 10
    ): Promise <UsuarioEntitiy[]> {
        return this._repositorioUsuario
            .find({
                where: where,
                skip: skip,
                take: take
            })
    }

    // async encontrarUno(id:number){
    //      console.log('Empezo');
    //      const usuario= await this._repositorioUsuario
    //          .findOne(id);
    //
    //      console.log(usuario);
    //      console.log('Termino en orden!');
    //      return usuario;
    //  }
}
