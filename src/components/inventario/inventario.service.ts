import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
    private readonly dataSource: DataSource,

    @InjectRepository(MovimientosEntity)
    private movimientos: Repository<MovimientosEntity>,
  ) { }


  async funct_edita_compras_inventarios_s(data: any[]): Promise<any[]> {
    const fecha = format(this.fecha_actual, 'yyyy-MM-dd HH:mm');
    const resultados = [];

    await this.dataSource.transaction(async (manager) => {

      for (const item of data) {

        const codProd = item.cod_producto.toUpperCase();

        const producto = await manager.findOne(VentaProductoEntity, {
          where: { codProd }
        });

        if (!producto) {
          resultados.push({ codProd, status: 'producto no encontrado' });
          continue;
        }

        const stockAntes = producto.existencia;
        const stockDespues = stockAntes + item.cantidad;

        // Actualizar producto
        const updateResult = await manager.update(
          VentaProductoEntity,
          { codProd },
          {
            descripcion: item.descripcion,
            precio_compra: item.costo_unidad,
            precio_venta: item.precio_venta,
            existencia: stockDespues,
            iva: item.iva,
            icui: item.icui,
            utilidad: item.utilidad,
            updated_at: fecha,
            activo: true
          }
        );

        // Insertar movimiento
        await manager.insert(MovimientosEntity, {
          codProd: codProd,
          tipo: 'Entrada',
          cantidad: item.cantidad,
          stock_antes: stockAntes,
          stock_despues: stockDespues,
          motivo: 'Compras',
          referencia: 'Varios',
          vendedor: 'Compras',
          fecha_registro: fecha,
        });

        resultados.push({ codProd, status: 'actualizado', updateResult });
      }
    });

    return resultados;
  }

  async funct_retorna_inventario() {
    return await this.repository.find();
  }

}