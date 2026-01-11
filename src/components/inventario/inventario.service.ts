import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InventariosDto } from './dto/edita-ventas-inventario.dto';
import { VentaProductoEntity } from '../venta-producto/entity/create_venta_producto.entity';
import { format } from 'date-fns';
import { DataSource } from 'typeorm';
import { MovimientosEntity } from '../movimientos/entity/movimientos.entity';


@Injectable()
export class InventarioService {
  result: any;
  fecha_actual = new Date();
  existencia: number = 0;

  constructor(
    @InjectRepository(VentaProductoEntity)
    private readonly repository: Repository<VentaProductoEntity>,
    private readonly dataSource: DataSource
  ) { }

  async funct_edita_ventas_inventarios_s(data: any[]): Promise<InventariosDto[]> {
    const fecha = format(this.fecha_actual, 'yyyy-MM-dd HH:mm');
    const resultados: InventariosDto[] = [];

    await this.dataSource.transaction(async (manager) => {
      for (const item of data) {
        const codProd = item.codProd.toUpperCase();
        const producto = await manager.findOne(this.repository.target, {
          where: { codProd },
        });

        if (!producto) {
          resultados.push({
            codProd,
            mensaje: 'Producto no encontrado',
            actualizado: false,
          } as any);
          continue;
        }
        const nuevaExistencia = producto.existencia - item.cantidad;

        if (nuevaExistencia < 1) {
          this.existencia = 0;
        } else {
          this.existencia = producto.existencia - item.cantidad;
        }

        /*  await manager.update(this.repository.target, { codProd }, {
           existencia: this.existencia,
           createAt: fecha,
         }); */

        resultados.push({
          codProd,
          existencia: this.existencia,
          mensaje: 'Actualizado correctamente',
          actualizado: true,
        } as any);
      }
    });
    return resultados;
  }

  async funct_edita_compras_inventarios_s(data: any[]): Promise<any[]> {
    const fecha = format(this.fecha_actual, 'yyyy-MM-dd HH:mm');
    const resultados = [];

    await this.dataSource.transaction(async (manager) => {
      for (const item of data) {
        const codProd = item.cod_producto.toUpperCase();

        const producto = await manager.findOne(VentaProductoEntity, {
          where: { codProd }
        });

        if (producto) {
          const nuevaExistencia = producto.existencia + item.cantidad;
          const updateResult = await manager.update(VentaProductoEntity, { codProd }, {
            descripcion: item.descripcion,
            precio_compra: item.costo_unidad,
            precio_venta: item.precio_venta,
            existencia: nuevaExistencia,
            iva: item.iva,
            icui: item.icui,
            utilidad: item.utilidad,
            createAt: fecha
          });

          resultados.push({ codProd, status: 'actualizado', updateResult });
        } else {
          resultados.push({ codProd, status: 'producto no encontrado' });
        }
      }
    });
    return resultados;
  }

  async funct_retorna_inventario() {
    return await this.repository.find();
  }

}