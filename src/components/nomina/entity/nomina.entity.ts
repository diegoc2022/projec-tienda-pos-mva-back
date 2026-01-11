import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'tbl_nomina'})
export class NominaEntity{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    cedula:string;

    @Column()
    valor_pago:number;
    
    @Column()
    concepto:string;
    
    @Column({ type: 'varchar', length: 50 })
    fecha_desde:string;

    @Column({ type: 'varchar', length: 50 })
    fecha_hasta:string;

    @Column()
    num_mes:number;

    @Column()
    num_year:number;
   
}