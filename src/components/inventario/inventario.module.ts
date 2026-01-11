import { InventarioService } from './inventario.service';
import { InventarioController } from './inventario.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentaProductoEntity } from '../venta-producto/entity/create_venta_producto.entity';

@Module({
    imports: [TypeOrmModule.forFeature([VentaProductoEntity])],
    controllers: [
        InventarioController,],
    providers: [
        InventarioService,],
})
export class InventarioModule { }
