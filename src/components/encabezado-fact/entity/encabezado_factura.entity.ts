import { Column, Entity, PrimaryGeneratedColumn, NonObjectIdLikeDocument } from 'typeorm';


@Entity({ name: 'tbl_encabezado_fact' })
export class EncabezadoFacturaEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    razon_social: string;

    @Column()
    nombre_titular: string;

    @Column()
    nit: string;

    @Column()
    direcion: string;

    @Column()
    telefono: string;

    @Column()
    Celular: string;

    @Column({ nullable: true })
    fecha_desde: string;

    @Column({ nullable: true })
    fecha_hasta: string;


    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fecha_registros: Date;
}

