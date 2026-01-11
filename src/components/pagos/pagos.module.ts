import { TypeOrmModule } from '@nestjs/typeorm';
import { PagosController } from './pagos.controller';
import { PagosService } from './pagos.service';
import { Module } from '@nestjs/common';
import { PagosEntity } from './entity/pagos.entity';

@Module({
    imports: [TypeOrmModule.forFeature([PagosEntity])],
    controllers: [
        PagosController,],
    providers: [
        PagosService,],
})
export class PagosModule { }
