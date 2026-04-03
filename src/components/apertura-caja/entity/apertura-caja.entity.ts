import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'tbl_apertura_caja' })
export class CreateCajaEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    vendedor: string;

    @Column()
    id_caja: number;

    @Column({ nullable: true })
    total_base: number;

    @UpdateDateColumn({ type: 'timestamp without time zone' })
    fecha_registro: Date;

}