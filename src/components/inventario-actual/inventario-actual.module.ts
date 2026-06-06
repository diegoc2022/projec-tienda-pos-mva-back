import { Module } from '@nestjs/common';
import { InventarioActualService } from './inventario-actual.service';
import { InventarioActualController } from './inventario-actual.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventarioActual } from './entities/inventario-actual.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InventarioActual])],
  controllers: [InventarioActualController],
  providers: [InventarioActualService],
})
export class InventarioActualModule { }
