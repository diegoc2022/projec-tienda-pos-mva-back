
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { VentaProductoEntity } from 'src/components/venta-producto/entity/create_venta_producto.entity';


@Entity({name:'tbl_vinculos'})
export class VinculosEntity {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    codigoInicial:string

    @Column()
    codigoVinculo:string
  
    @ManyToOne((type) => VentaProductoEntity, (cod) => cod.codigoVinculo)
    @JoinColumn({name:'codigoVinculo'})
    producto: VentaProductoEntity[]; //Usuario relac
    
    
    
}
