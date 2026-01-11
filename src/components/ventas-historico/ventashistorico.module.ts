import { VentasHistoricosService } from './ventashistorico.service';
import { VentashistoricoController } from './ventashistorico.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentasHistoricosEntity } from './entity/create-ventas-historico.entity';

@Module({
    imports: [TypeOrmModule.forFeature([VentasHistoricosEntity])],
    controllers: [
        VentashistoricoController,],
    providers: [
        VentasHistoricosService,],
})
export class VentasHistoricoModule { }
