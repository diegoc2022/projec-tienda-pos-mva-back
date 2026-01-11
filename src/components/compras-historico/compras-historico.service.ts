
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ComprasHistoricoEntity } from './entity/compras-historico.entity';
import { Repository } from 'typeorm';
import { ComprasHistoricoDto } from './dto/compras-historico.dto';

@Injectable()
export class ComprasHistoricoService {
    constructor(
        @InjectRepository(ComprasHistoricoEntity)
        private compras_h:Repository<ComprasHistoricoEntity>            
    ){}

    async funct_create_compras_historico_s(
        data: ComprasHistoricoDto | ComprasHistoricoDto[]
      ): Promise<{ success: boolean; resultado?: any; mensaje?: string }> {
        try {
          const arr = Array.isArray(data) ? data : [data];
      
          // Limpieza profunda y remoción de cualquier `id`
          const cleanData = JSON.parse(JSON.stringify(arr)).map((item: any) => {
            delete item.id;
            return item;
          });       
          
          // Insert masivo ignorando duplicados de PK
          const insertResult = await this.compras_h
            .createQueryBuilder()
            .insert()
            .into(ComprasHistoricoEntity)
            .values(cleanData)
            .orIgnore()                    // <<— aquí decimos “ON CONFLICT DO NOTHING”
            .execute();
      
          return {
            success: true,
            resultado: insertResult,     // insertResult.identifiers trae los ids recién creados
          };
        } catch (error) {
          console.error('Error al registrar compra(s) histórica(s):', error);
          return {
            success: false,
            mensaje: 'Ocurrió un error al guardar la(s) compra(s) histórica(s).',
          };
        }
      }    

    async funt_retorna_facturas_compras_s(data:any):Promise<any>{        
        const result = await this.compras_h.find({
            where:{
                num_factura:data.toUpperCase()
            }
        })

        if (!result) {
            return{
                status:404,
                msg:'La factura que intenta consultar no existe'
            }            
        } else {
            return result;
        }
    }

    async funt_elimina_facturas_compras_s(data:any):Promise<any>{               
        const result = await this.compras_h.findOne({
            where:{
                num_factura:data.toUpperCase()
            }
        })

        if (!result) {
            return{
                status:404,
                msg:'La factura que intenta eliminar no existe'
            }            
        } else {
            return await this.compras_h.delete({num_factura:result.num_factura});
        }
    }

   async funct_retorna_compras_historicos_s(mes:number, year:number):Promise<ComprasHistoricoEntity[]>{
        return this.compras_h.find({
            where:{
                num_mes: mes,
                num_year: year
            }
        })
    }
}
