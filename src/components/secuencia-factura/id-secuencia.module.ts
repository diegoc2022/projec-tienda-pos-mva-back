import { IdSecuenciaService } from './id-secuencia.service';
import { IdSecuenciaController } from './id-secuencia.controller';
import { IdSecuenciaFactEntity } from './entity/id-secuencia.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([IdSecuenciaFactEntity])],
    controllers: [
        IdSecuenciaController,],
    providers: [
        IdSecuenciaService,],
})
export class IdSecuenciaModule { }
