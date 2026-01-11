import { ClientesEntity } from "src/components/clientes/entity/clientes.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:'tbl_ventas_x_cobrar'})
export class VentasXCobrarEntity{

    @PrimaryGeneratedColumn('increment')
    id:number; 
    
    @Column({ name:'codigo_cliente_v', type: 'varchar'})
    codigo_cliente_v:string;
    
    @Column()
    codigo_venta:number;

    @Column()
    id_caja:number;

    @Column()
    id_venta:string;

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

    @Column()
    estado_venta:string;

    @Column({ nullable: true })
    num_mes:number;

   @Column({ nullable: true })
    num_year:number;

    @Column()
    fecha_registro:string;

    @Column()
    hora_registro:string;

    @ManyToOne(() => ClientesEntity, (cliente) => cliente.codigo_cliente_v)
    @JoinColumn({name:'codigo_cliente_v'})   
    codigo_cliente: ClientesEntity;

}