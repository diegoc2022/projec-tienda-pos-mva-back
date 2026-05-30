import { Module } from '@nestjs/common';
import { FacturarFeService } from './facturar-fe.service';
import { FacturarFeController } from './facturar-fe.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacturarFe } from './entities/facturar-fe.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([FacturarFe]
    )],
  controllers: [FacturarFeController],
  providers: [FacturarFeService],
})
export class FacturarFeModule { }
