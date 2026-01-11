import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'tbl_compras_facturas'})
export class CreateComprasFacturasEntity{
    @PrimaryGeneratedColumn('increment')
    id:number

    @Column({unique:true})
    factura:string

    @Column({type:'timestamp',default:()=>'CURRENT_TIMESTAMP'})
    fecha_registro:Date;
}