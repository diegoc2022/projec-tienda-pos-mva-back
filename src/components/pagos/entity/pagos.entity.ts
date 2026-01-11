import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'tbl_pagos'})
export class PagosEntity{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    cedula:string;

    @Column()
    codigo_venta:number;
    
    @Column()
    monto_total:number;
    
    @Column()
    otros_pagos_realizados:number;

    @Column()
    ultimo_pago_realizado:number;

    @Column()
    tipo_pago:string;

    @Column()
    total_pagos_realizados:number;

    @Column()
    saldo_restante:number; 
    
    @Column()
    estado_id_venta:string; 

    @Column({type:'timestamp',default:()=>'CURRENT_TIMESTAMP'})
    fecha_registro:string;
}