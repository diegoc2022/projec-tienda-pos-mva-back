import { Column, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'tbl_id_inventario' })
export class AperturaInventario {
    @PrimaryColumn()
    id: number;

    @Column()
    id_inventario: number;

    @UpdateDateColumn({ type: 'timestamp without time zone' })
    update_at: Date;
}
