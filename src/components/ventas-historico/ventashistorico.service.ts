import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VentasHistoricosEntity } from './entity/create-ventas-historico.entity';
import { Repository } from 'typeorm';
import { VentasHistoricosDto } from './dto/create-ventas-historico.dto';

@Injectable()
export class VentasHistoricosService {
    constructor(
        @InjectRepository(VentasHistoricosEntity)
        private repository: Repository<VentasHistoricosEntity>
    ){}  

    async funct_registra_ventas_historicos_s(
      data: VentasHistoricosDto | VentasHistoricosDto[]
    ): Promise<{ success: boolean; resultado?: any; mensaje?: string }> {
      try {
        let resultado;
    
        // Verificamos si es un solo objeto o un array
        if (Array.isArray(data)) {
          // Guarda múltiples registros
          resultado = await this.repository.save(data);
        } else {
          // Guarda un solo registro
          resultado = await this.repository.save([data]);
        }
    
        return {
          success: true,
          resultado,
        };
      } catch (error) {
        console.error('Error al registrar venta(s) histórica(s):', error);
        return {
          success: false,
          mensaje: 'Ocurrió un error al guardar la(s) venta(s) histórica(s).',
        };
      }
    }

   async funct_retorna_ventas_historicos_s(mes:number, year:number):Promise<VentasHistoricosEntity[]>{
      return this.repository.find({
        where:{
          num_mes: mes,
          num_year: year
        }
      })
    }    
      
}
