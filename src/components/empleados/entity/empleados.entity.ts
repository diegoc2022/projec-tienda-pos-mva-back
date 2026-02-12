import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'tbl_empleados' })
export class EmpleadosEntity {
    @PrimaryColumn()
    cedula: string;

    @Column()
    nombre_empleado: string;

    @Column()
    usuario: string;

    @Column()
    direccion: string;

    @Column()
    telefono: string;

    @Column()
    ciudad: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fecha_registro: Date

}