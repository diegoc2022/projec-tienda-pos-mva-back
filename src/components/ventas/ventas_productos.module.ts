import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentasProductosEntity } from 'src/components/ventas/entity/create_venta_productos.entity';
import { VentasProductosController } from './ventas_productos.controller';
import { VentasProductosService } from './ventas_productos.service';

@Module({
    imports: [TypeOrmModule.forFeature([VentasProductosEntity])],
    controllers: [
        VentasProductosController,
        ],
    providers: [
        VentasProductosService,
        ],
})
export class VentasProductosModule { }
