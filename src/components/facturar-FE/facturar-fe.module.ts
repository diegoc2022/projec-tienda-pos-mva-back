import { Module } from '@nestjs/common';
import { FacturarFeService } from './facturar-fe.service';
import { FacturarFeController } from './facturar-fe.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacturarFe } from './entities/facturar-fe.entity';
import { VentasProductosService } from '../ventas-temp/ventas_productos.service';
import { VentaProductoEntity } from '../venta-producto/entity/create_venta_producto.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([FacturarFe, VentaProductoEntity]
    )],
  controllers: [FacturarFeController],
  providers: [FacturarFeService, VentasProductosService],
})
export class FacturarFeModule { }
