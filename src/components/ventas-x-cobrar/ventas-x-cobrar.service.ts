import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VentasXCobrarEntity } from './entity/ventas-x-cobrar.entity';
import { DataSource, Repository } from 'typeorm';
import { VentasXCobrarDto } from './dto/ventas-x-cobrar.dto';
import { format } from 'date-fns';
import { formatearFechaDDMMYYYY, extraerSoloFecha } from '../../utils/date-formatter';

@Injectable()
export class VentasXCobrarService {
  fecha_actual = new Date();
  mes: any;
  year: any;
  constructor(
    @InjectRepository(VentasXCobrarEntity)
    private repository: Repository<VentasXCobrarEntity>,
    private readonly dataSource: DataSource
  ) { }

  async funct_registra_ventas_x_cobrar(
    codigoc: any,
    codigov: any,
    data: VentasXCobrarDto[]
  ): Promise<{ success: boolean; resultados: any[]; mensaje?: string }> {
    const resultados: any[] = [];
    this.mes = format(this.fecha_actual, 'M');
    this.year = format(this.fecha_actual, 'yyyy');

    await this.dataSource.transaction(async (manager) => {
      for (const item of data) {
        // Validación mínima (puedes extenderla)
        if (
          !item.codProd || !item.descripcion || typeof item.cantidad !== 'number' ||
          typeof item.precio_venta !== 'number' || !item.fecha_registro
        ) {
          resultados.push({
            codProd: item.codProd,
            mensaje: 'Datos incompletos o inválidos',
            registrado: false
          });
          continue;
        }

        const venta = {
          codigo_cliente_v: codigoc,
          codigo_venta: codigov,
          id_caja: item.id_caja,
          id_venta: item.id_venta,
          codProd: item.codProd,
          descripcion: item.descripcion,
          existencia: item.existencia,
          cantidad: item.cantidad,
          precio_compra: item.precio_compra,
          precio_venta: item.precio_venta,
          origen_venta: item.origen_venta,
          subtotal: item.subtotal,
          vendedor: 'APV',
          estado: 'Cerrado',
          factura: item.factura,
          venta_por_und: item.venta_por_und,
          estado_venta: 'ABIERTO',
          num_mes: this.mes,
          num_year: this.year,
          fecha_registro: item.fecha_registro, // Usar la fecha formateada
          hora_registro: item.hora_registro,
        };

        const saved = await manager.save(this.repository.target, venta);

        resultados.push({
          codProd: item.codProd,
          registrado: true,
          id: saved?.id || null,
          mensaje: 'Venta registrada correctamente'
        });
      }
    });

    return {
      success: true,
      resultados
    };
  }

  funct_retorna_ventas_x_cobrar() {
    return this.repository.find();
  }

  async funct_consulta_ventas_x_cliente_s(codigo: any, id_venta: any) {
    return await this.repository.find({
      where: {
        codigo_cliente_v: codigo,
        codigo_venta: id_venta
      }
    })
  }

  async funct_actualiza_estado_ventas_s(codigo: any, id_venta: any, estado: any) {
    let result = await this.repository.find({
      where: {
        codigo_cliente_v: codigo,
        codigo_venta: id_venta
      }
    })

    if (result.length > 0) {
      this.repository.update({ codigo_cliente_v: codigo, codigo_cliente: id_venta }, { estado_venta: estado.estado_venta });
      return {
        status: 200,
        msg: 'El estado de venta fue actualizado correctamente'
      }
    } else {
      return {
        status: 412,
        msg: 'Error en validaciones previas'
      }
    }
  }
}
