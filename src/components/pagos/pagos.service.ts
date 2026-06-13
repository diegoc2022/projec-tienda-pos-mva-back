import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PagosEntity } from './entity/pagos.entity';
import { DataSource, Repository } from 'typeorm';
import { PagosDto } from './dto/pagos.dto';

@Injectable()
export class PagosService {
  constructor(
    @InjectRepository(PagosEntity)
    private repository: Repository<PagosEntity>,
    private readonly dataSource: DataSource
  ) { }


  async funct_registra_pagos(data: PagosDto[]): Promise<{ success: boolean; resultados: any[] }> {
    const resultados: any[] = [];
    await this.dataSource.transaction(async (manager) => {
      for (const item of data) {
        if (!item.cedula || !item.codigo_venta || typeof item.otros_pagos_realizados !== 'number' || typeof item.ultimo_pago_realizado !== 'number') {
          resultados.push({
            cedula: item.cedula,
            codigo_venta: item.codigo_venta,
            mensaje: 'Datos inválidos',
            registrado: false,
          });
          continue;
        }

        const pagoGuardado = await manager.save(this.repository.target, {
          cedula: item.cedula,
          codigo_venta: item.codigo_venta,
          monto_total: item.monto_total,
          otros_pagos_realizados: item.otros_pagos_realizados,
          ultimo_pago_realizado: item.ultimo_pago_realizado,
          tipo_pago: item.tipo_pago,
          total_pagos_realizados: item.otros_pagos_realizados + item.ultimo_pago_realizado,
          saldo_restante: item.saldo_restante,
          estado_id_venta: item.estado_id_venta
        });

        resultados.push({
          ...pagoGuardado,
          mensaje: 'Pago registrado',
          registrado: true,
        });
      }
    });

    return { success: true, resultados };
  }

  async funct_retorna_pagos_s(cod: any, id: any): Promise<PagosEntity[]> {
    return await this.repository.find({
      where: {
        cedula: cod,
        codigo_venta: id
      }
    })
  }
}
