import { VentasXCobrarEntity } from "src/components/ventas-x-cobrar/entity/ventas-x-cobrar.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'tbl_clientes'})
export class ClientesEntity{
    @PrimaryColumn()
    codigo_cliente:string;

    @Column()
    nombre:string;

    @Column()
    telefono:string;

    @Column()
    codigo_venta:number;

    @Column()
    fecha_registro:Date;

    @OneToMany(() => VentasXCobrarEntity, (venta) => venta.codigo_cliente)
    codigo_cliente_v: VentasXCobrarEntity[];
}