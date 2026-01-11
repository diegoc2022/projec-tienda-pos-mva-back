import { Module } from '@nestjs/common';
import { MovimientosController } from './movimientos.controller';
import { MovimientosService } from './movimientos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovimientosEntity } from './entity/movimientos.entity';
import { VentaProductoEntity } from '../venta-producto/entity/create_venta_producto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MovimientosEntity, VentaProductoEntity])],
  controllers: [MovimientosController],
  providers: [MovimientosService]
})
export class MovimientosModule { }
