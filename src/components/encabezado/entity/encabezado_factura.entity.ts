import { Column, Entity, PrimaryGeneratedColumn, NonObjectIdLikeDocument } from 'typeorm';


@Entity({name:'tbl_encabezado_facturas'})
export class EncabezadoFacturaEntity{

    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    id_venta:number;

    @Column()
    num_factura:string;

    @Column()
    nit_cliente:string;

    @Column()
    nombre_cliente:string;

    @Column()
    dir_cliente:string;

    @Column()
    tel_cliente:string;

    @Column()
    vendedor:string;

    @Column()
    origen:string;

    @Column({type:'timestamp',default:()=>'CURRENT_TIMESTAMP'})
    createAp:Date;
}

