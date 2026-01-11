import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'tbl_compras'})
export class ComprasEntity{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    cod_producto:string;

    @Column()
    descripcion:string;

    @Column()
    num_factura:string;

    @Column()
    tipo_compra:string;

    @Column({ type: 'numeric' }) 
    precio_unitario:number;

    @Column()
    cantidad:number;

    @Column({ type: 'numeric' }) 
    subtotal:number;

    @Column({ type: 'numeric' })
    descuento:number;

    @Column({ type: 'numeric' }) 
    total_descuento:number;

    @Column()
    iva:number;

    @Column({ type: 'numeric' })     
    total_iva:number;

    @Column()
    icui:number;

    @Column({ type: 'numeric' }) 
    total_icui:number;

    @Column({ type: 'numeric' }) 
    costo_unidad:number;

    @Column({ type: 'numeric' }) 
    total_compras:number;

    @Column()
    utilidad:number;

    @Column()
    precio_venta:number;

    @Column({ type: 'varchar', nullable: true })
    num_mes:number;

   @Column({ type: 'varchar', nullable: true })
    num_year:number;

   @Column({ type: 'date' })
    fecha_registro:Date;

    @Column()
    hora_registro:string;
}