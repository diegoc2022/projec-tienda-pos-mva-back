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

    @Column()
    posicion_x1: Number;

    @Column()
    posicion_y1: Number;

    @Column()
    posicion_x2: Number;

    @Column()
    posicion_y2: Number;

    @Column()
    posicion_x3: Number;

    @Column()
    posicion_y3: Number;

    @Column()
    posicion_x4: Number;

    @Column()
    posicion_y4: Number;

    @Column()
    posicion_x5: Number;

    @Column()
    posicion_y5: Number;

}

