import { AjustesVariosService } from './ajustes-varios.service';
import { AjustesVariosController } from './ajustes-varios.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentaProductoEntity } from '../venta-producto/entity/create_venta_producto.entity';

@Module({
    imports: [TypeOrmModule.forFeature([VentaProductoEntity])],
    controllers: [
        AjustesVariosController],
    providers: [
        AjustesVariosService],
})
export class AjustesVariosModule { }
