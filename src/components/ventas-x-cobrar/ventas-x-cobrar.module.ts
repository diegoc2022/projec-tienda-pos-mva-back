import { Module } from '@nestjs/common';
import { VentasXCobrarService } from './ventas-x-cobrar.service';
import { VentasXCobrarController } from './ventas-x-cobrar.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentasXCobrarEntity } from './entity/ventas-x-cobrar.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VentasXCobrarEntity])],
  providers: [VentasXCobrarService],
  controllers: [VentasXCobrarController]
})
export class VentasXCobrarModule {}
