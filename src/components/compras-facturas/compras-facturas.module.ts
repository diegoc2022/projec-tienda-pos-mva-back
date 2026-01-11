import { ComprasFacturasService } from './compras-facturas.service';
import { ComprasFacturasController } from './compras-facturas.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateComprasFacturasEntity } from './entity/createComprasFacturas.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([CreateComprasFacturasEntity]) 
    ],
    controllers: [
        ComprasFacturasController,],
    providers: [
        ComprasFacturasService,],
})
export class ComprasFacturasModule { }
