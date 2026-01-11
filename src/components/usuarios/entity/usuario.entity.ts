import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { RolEntity } from "./rol.entity";

@Entity({name:'tbl_usuarios'})
export class UsuarioEntity {
  
   @PrimaryGeneratedColumn('increment')    
   id_user:number;

   @Column({type:'varchar',length:20, nullable:true })
   user:string;

   @Column({type:'varchar',length:300, nullable:true,select:true})   
   clave:string; 

   @Column()
   id_rol:number;

   @ManyToOne(() => RolEntity, role => role.users)
  @JoinColumn({ name: 'id_rol' })
  rol: RolEntity

}



