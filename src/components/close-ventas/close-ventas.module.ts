import { CloseVentasService } from './close-ventas.service';
import { CloseVentasController } from './close-ventas.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentasProductosEntity } from 'src/components/ventas/entity/create_venta_productos.entity';

@Module({
    imports: [TypeOrmModule.forFeature([VentasProductosEntity])],
    controllers: [
        CloseVentasController,],
    providers: [
        CloseVentasService,],
})
export class CloseVentasModule { }
