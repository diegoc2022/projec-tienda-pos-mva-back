import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'tbl_ventas_temp'})
export class VentasProductosEntity{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    id_caja:number

    @Column()
    id_venta:string

    @Column()
    codProd:string;

    @Column()
    descripcion:string;

    @Column()
    cantidad:number;

    @Column()
    existencia:number;

    @Column()
    precio_compra:number;

    @Column()    
    precio_venta:number;

    @Column()
    origen_venta:string;

    @Column()
    subtotal:number;

    @Column()
    vendedor:string;

    @Column()
    factura:number;

    @Column({default:true})
    estado:string;

    @Column({default:false})
    venta_por_und:boolean;

    @Column({ type: 'varchar', nullable: true })
    num_mes:number;

   @Column({ type: 'varchar', nullable: true })
    num_year:number;

    @Column()
    fecha_registro:string;

    @Column()
    hora_registro:string;






}