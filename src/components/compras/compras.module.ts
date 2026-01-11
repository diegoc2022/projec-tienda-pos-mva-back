import { TypeOrmModule } from '@nestjs/typeorm';
import { ComprasController } from './compras.controller';
import { ComprasService } from './compras.service';
import { Module } from '@nestjs/common';
import { ComprasEntity } from './entity/compras.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([ComprasEntity]) 
    ],
    controllers: [
        ComprasController,],
    providers: [
        ComprasService,],
})
export class ComprasModule { }
