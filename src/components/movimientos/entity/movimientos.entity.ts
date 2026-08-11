import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, JoinColumn, } from 'typeorm';
import { VentaProductoEntity } from 'src/components/venta-producto/entity/create_venta_producto.entity';
import { UsuarioEntity } from 'src/components/usuarios/entity/usuario.entity';

@Entity({ name: 'tbl_movimiento_inv' })
export class MovimientosEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    codProd: string;

    @Column({ type: 'int' })
    cantidad: number;

    @Column({ type: 'int' })
    stock_antes: number;

    @Column({ type: 'int' })
    stock_despues: number;

    @Column({ nullable: true })
    tipo: string;

    @Column({ nullable: true })
    motivo: string;

    @Column({ nullable: true })
    referencia: string;

    @Column({ nullable: true })
    vendedor: string;

    @CreateDateColumn()
    fecha_registro: Date;

}
