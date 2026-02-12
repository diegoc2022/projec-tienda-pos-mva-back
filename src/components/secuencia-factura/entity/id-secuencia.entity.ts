import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tbl_secuencia_fact' })
export class IdSecuenciaFactEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    consecutivo_autorizado: number

    @Column({ nullable: true })
    num_secuencia: number;

    @Column({ nullable: true })
    consecutivo_disponible: number

    @Column({ type: 'timestamp', default: () => 'now()' })
    fecha_registro: Date

}