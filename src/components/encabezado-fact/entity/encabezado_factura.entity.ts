import { Column, Entity, PrimaryGeneratedColumn, NonObjectIdLikeDocument } from 'typeorm';


@Entity({ name: 'tbl_encabezado_facturas' })
export class EncabezadoFacturaEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    razon_social: string;

    @Column()
    nonbre_titular: string;

    @Column()
    nit: string;

    @Column()
    direcion: string;

    @Column()
    telefono: string;

    @Column()
    Celular: string;

    @Column()
    cliente_final: string;

    @Column()
    cedula_cliente: string;

    @Column()
    dir_cliente: string;

    @Column()
    tel_cliente: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createAp: Date;
}

