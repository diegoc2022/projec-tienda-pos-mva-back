import { GastosService } from './gastos.service';
import { GastosController } from './gastos.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GastosEntity } from './entity/gastos.entity';

@Module({
    imports: [TypeOrmModule.forFeature([GastosEntity])],
    controllers: [
        GastosController,],
    providers: [
        GastosService,],
})
export class GastosModule { }
