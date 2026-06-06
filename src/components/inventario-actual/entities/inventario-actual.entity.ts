import { Column, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'tbl_inventario_actual' })
export class InventarioActual {
    @PrimaryColumn()
    codProd: string;

    @Column({ nullable: false })
    descripcion: string;

    @Column({ type: 'int' })
    stock_actual: number;

    @Column({ type: 'int' })
    stock_despues: number;

    @Column({ nullable: true })
    motivo: string;

    @Column({ nullable: true })
    vendedor: string;

    @UpdateDateColumn({ type: 'timestamp without time zone' })
    fecha_inventario: Date;

}
