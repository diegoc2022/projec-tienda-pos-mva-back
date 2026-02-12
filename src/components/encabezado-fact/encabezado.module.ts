import { EncabezadoService } from './encabezado.service';
import { EncabezadoController } from './encabezado.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EncabezadoFacturaEntity } from './entity/encabezado_factura.entity';

@Module({
    imports: [TypeOrmModule.forFeature([EncabezadoFacturaEntity])],
    controllers: [
        EncabezadoController,],
    providers: [
        EncabezadoService,],
})
export class EncabezadoModule { }
