import { VinculosService } from './vinculosService';
import { VinculosController } from './vinculos.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VinculosEntity } from './entity/create-vinculos.entity';
import { VentaProductoEntity } from '../venta-producto/entity/create_venta_producto.entity';


@Module({
    imports: [TypeOrmModule.forFeature([VinculosEntity,VentaProductoEntity])],
    controllers: [
        VinculosController],
    providers: [
        VinculosService],
})
export class VinculosModule { }
