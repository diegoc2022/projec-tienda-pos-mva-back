import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesEntity } from './entity/clientes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClientesEntity])],
  providers: [ClientesService],
  controllers: [ClientesController]
})
export class ClientesModule {}
