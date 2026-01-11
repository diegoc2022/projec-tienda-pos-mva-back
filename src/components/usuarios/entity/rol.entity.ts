import { RolMenuEntity } from "src/components/menu/entity/rol-menu.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UsuarioEntity } from "./usuario.entity";

@Entity({name:'tbl_rol'})
export class RolEntity {
    @PrimaryGeneratedColumn('increment')
    id_rol:number

    @Column()
    nombre:string 

    @OneToMany(() => RolMenuEntity, rm => rm.role)
    rolMenus: RolMenuEntity[]

    @OneToMany(() => UsuarioEntity, user => user.rol)
    users: UsuarioEntity[]

}