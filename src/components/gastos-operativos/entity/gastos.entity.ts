import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'tbl_gastos'})
export class GastosEntity{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    valor_gastos:number;

    @Column()
    tipo_concepto:string;

    @Column({ nullable: true })
    observacion:string | null;

    @Column({ type: 'varchar', nullable: true })
    num_mes:number;

   @Column({ type: 'varchar', nullable: true })
    num_year:number;

    @Column()
    fecha_registro:string;

    @Column()
    hora_registro:string

}