import { EditaPreciosService } from './edita-precios.service';
import { EditaPreciosController } from './edita-precios.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentaProductoEntity } from '../venta-producto/entity/create_venta_producto.entity';

@Module({
    imports: [TypeOrmModule.forFeature([VentaProductoEntity])],
    controllers: [
        EditaPreciosController],
    providers: [
        EditaPreciosService],
})
export class EditaPreciosModule { }
