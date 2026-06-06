import { Module } from '@nestjs/common';
import { AperturaInventarioService } from './apertura-inventario.service';
import { AperturaInventarioController } from './apertura-inventario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AperturaInventario } from './entities/apertura-inventario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AperturaInventario])],
  controllers: [AperturaInventarioController],
  providers: [AperturaInventarioService],
})
export class AperturaInventarioModule { }
