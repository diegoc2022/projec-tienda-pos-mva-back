import { InventarioService } from './inventario.service';
import { InventarioController } from './inventario.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentaProductoEntity } from '../venta-producto/entity/create_venta_producto.entity';
import { MovimientosEntity } from '../movimientos/entity/movimientos.entity';
import { InventariosEntity } from './entity/inventario.entity';

@Module({
    imports: [TypeOrmModule.forFeature([VentaProductoEntity, MovimientosEntity, InventariosEntity])],
    controllers: [
        InventarioController,],
    providers: [
        InventarioService,],
})
export class InventarioModule { }
