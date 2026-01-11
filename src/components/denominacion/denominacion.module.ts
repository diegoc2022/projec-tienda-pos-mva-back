import { DenominacionController } from './denominacion.controller';
import { DenominacionService } from './denominacion.service';
import { Module } from '@nestjs/common';
import { CreateDenominacionEntity } from './entity/create-denominacion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([CreateDenominacionEntity])],
    controllers: [
        DenominacionController,],
    providers: [
        DenominacionService,],
})
export class DenominacionModule { }
