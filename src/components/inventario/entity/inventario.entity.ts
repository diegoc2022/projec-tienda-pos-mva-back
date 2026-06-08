import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'tbl_inventario' })
export class InventariosEntity {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'int' })
    id_inventario: number;

    @Column({ unique: true })
    codprod: string;

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