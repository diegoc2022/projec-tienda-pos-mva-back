import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'tbl_inventario_actual' })
export class InventarioActual {
    @PrimaryColumn()
    codprod: string;

    @Column({ nullable: false })
    descripcion: string;

    @Column()
    stock_actual: number;

    @Column()
    stock_despues: number;

    @Column({ nullable: true })
    id_tipo: string;

    @Column({ nullable: true })
    nombre_tipo: string;

    @Column({ nullable: true })
    vendedor: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp without time zone' })
    updated_at: Date;

}
