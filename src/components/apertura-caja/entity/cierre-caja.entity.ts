import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tbl_movimiento_caja' })
export class CierreCajaEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    vendedor: string;

    @Column()
    id_caja: number;

    @Column()
    total_base: number;

    @Column()
    estado_caja: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fecha_registro: Date;

}