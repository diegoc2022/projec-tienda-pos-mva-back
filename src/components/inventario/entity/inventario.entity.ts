import { VentaProductoEntity } from "src/components/venta-producto/entity/create_venta_producto.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tbl_inventario' })
export class InventariosEntity {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'int' })
    id_inventario: number;

    @Column({ unique: true })
    codprod: string;

    @Column({ unique: true })
    descripcion: string;

    @Column({ type: 'int' })
    stock_actual: number;

    @Column({ type: 'int' })
    stock_despues: number;

    @Column({ nullable: true })
    id_tipo: string;

    @Column({ nullable: true })
    nombre_tipo: string;

    @Column({ nullable: true })
    vendedor: string;

    @CreateDateColumn({ type: 'timestamp without time zone' })
    created_at: Date;

}