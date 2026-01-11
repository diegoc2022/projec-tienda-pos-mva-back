import { PrecioVentasController } from './venta-producto.controller';
import { PrecioVentasService } from './venta-producto.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentaProductoEntity } from './entity/create_venta_producto.entity';

@Module({
    imports: [TypeOrmModule.forFeature([VentaProductoEntity])],
    controllers: [PrecioVentasController],
    providers: [PrecioVentasService],
})
export class PrecioVentasModule { }
