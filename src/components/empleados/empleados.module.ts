import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpleadosEntity } from './entity/empleados.entity';
import { EmpleadosController } from './empleados.controller';
import { EmpleadosService } from './empleados.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([EmpleadosEntity]) 
    ],
    controllers: [EmpleadosController],
    providers: [EmpleadosService],
})
export class EmpleadosModule {}
