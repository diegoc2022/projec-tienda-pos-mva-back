import { VentaProductoEntity } from "src/components/venta-producto/entity/create_venta_producto.entity";
import { Entity } from "typeorm";

@Entity({name:'tbl_productos'})
export class ProductosEntity extends VentaProductoEntity{    
    
}
