import { VentasProductosEntity } from "src/components/ventas-temp/entity/create_venta_productos.entity";
import { Entity } from "typeorm";

@Entity({ name: 'tbl_ventas_historico' })
export class VentasHistoricosEntity extends VentasProductosEntity {

}
