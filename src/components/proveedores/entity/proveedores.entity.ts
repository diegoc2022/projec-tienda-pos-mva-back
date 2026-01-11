import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name:'tbl_proveedores'})
export class ProveedoresEntity {
    
    @PrimaryColumn()  
    nit:string;
   
    @Column()
    nombre:string;

    @Column()
    direccion:string;

    @Column()
    telefono:string;

    @Column()
    ciudad:string;

    @Column({type:'timestamp',default:()=>'CURRENT_TIMESTAMP'})
    fecha_registro:Date

}
