import { ProveedoresEntity } from 'src/components/proveedores/entity/proveedores.entity';
import { ProveedoresController } from './proveedores.controller';
import { ProveedoresService } from './proveedores.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([ProveedoresEntity]) 
    ],
    controllers: [ProveedoresController],
    providers: [ProveedoresService],
})
export class ProveedoresModule { }
