import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tbl_secuencias' })
export class IdSecuenciaEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    consecutivo_factura: number

    @Column({ nullable: true })
    numero_factura: number;

    @Column({ nullable: true })
    consecutivo_disponible: number

    @Column({ type: 'timestamp', default: () => 'now()' })
    fecha_registro: Date

}