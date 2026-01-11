import { ComprasEntity } from "src/components/compras/entity/compras.entity";
import { Entity } from "typeorm";

@Entity({name:'tbl_compras_historico'})
export class ComprasHistoricoEntity extends ComprasEntity{

}