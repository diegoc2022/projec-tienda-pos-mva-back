import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GastosEntity } from './entity/gastos.entity';
import { Repository } from 'typeorm';
import { GastosDto } from './dto/gastos.dto';

@Injectable()
export class GastosService {
    constructor(
        @InjectRepository(GastosEntity)
        private repository: Repository<GastosEntity>
    ) { }

    async funct_registra_gastos_opertivos_s(data: GastosDto): Promise<GastosEntity> {
        const nuevosGastos = this.repository.create(data);
        return await this.repository.save(nuevosGastos);
    }

    async funct_retorna_gastos_operativos_s(mes: number, year: number): Promise<GastosEntity[]> {
        return this.repository.find({
            where: {
                num_mes: mes,
                num_year: year
            }
        })
    }
}
