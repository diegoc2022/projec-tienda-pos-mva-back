import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'tbl_apertura_caja'})
export class CreateCajaEntity{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    total_base:number;

    @Column({type:'timestamp',default:()=>'CURRENT_TIMESTAMP'})
    fecha_registro:Date;

    @Column()
    estado:boolean;
}