
import { VinculosEntity } from "src/components/viculos/entity/create-vinculos.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity({name:'tbl_venta_producto'})
export class VentaProductoEntity {
    
    @PrimaryColumn()
    codProd:string;

    @Column({nullable:false})
    descripcion:string;

    @Column({nullable:true,type:'float'})
    precio_compra:number;

    @Column({nullable:false})
    precio_venta:number;

    @Column({nullable:false})
    existencia:number;

    @Column({nullable:false})
    codigo_clasific:number;

    @Column({nullable:false})
    codigo_proveed:number;    

    @Column({nullable:true})
    iva:number;

    @Column({nullable:true})
    icui:number

    @Column({nullable:true})
    utilidad:number

    @Column({ default: false })
    venta_por_und: boolean;

    @Column({type:'timestamp',default:()=>'CURRENT_TIMESTAMP'})
    createAt:Date
 
    @OneToMany(() => VinculosEntity, (cod) => cod.producto)   
    codigoVinculo: VinculosEntity;

    

    

}
