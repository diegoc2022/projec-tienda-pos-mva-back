import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventariosEntity } from './entity/inventario.entity';
import { InventarioController } from './inventario.controller';
import { InventarioService } from './inventario.service';
import { MovimientosEntity } from '../movimientos/entity/movimientos.entity';
import { VentaProductoEntity } from '../venta-producto/entity/create_venta_producto.entity';
import { InventarioActual } from '../inventario-actual/entities/inventario-actual.entity';
import { InventarioActualService } from '../inventario-actual/inventario-actual.service';
import { AjustesVariosService } from '../ajustes-varios/ajustes-varios.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([InventariosEntity, VentaProductoEntity, MovimientosEntity, InventarioActual])
    ],
    controllers: [InventarioController],
    providers: [InventarioService, InventarioActualService, AjustesVariosService],
})
export class InventarioModule { }
