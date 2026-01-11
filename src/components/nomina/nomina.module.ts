import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { NominaEntity } from './entity/nomina.entity';
import { NominaController } from './nomina.controller';
import { NominaService } from './nomina.service';


@Module({
    imports: [
        TypeOrmModule.forFeature([NominaEntity]) 
    ],
    controllers: [NominaController],
    providers: [NominaService],
})
export class NominaModule { }