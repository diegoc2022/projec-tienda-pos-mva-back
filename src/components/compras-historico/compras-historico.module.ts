import { ComprasHistoricoService } from './compras-historico.service';
import { ComprasHistoricoController } from './compras-historico.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComprasHistoricoEntity } from './entity/compras-historico.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ComprasHistoricoEntity])],
    controllers: [
        ComprasHistoricoController,],
    providers: [
        ComprasHistoricoService,],
})
export class ComprasHistoricoModule { }
