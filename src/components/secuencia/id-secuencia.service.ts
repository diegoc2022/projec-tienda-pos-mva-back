import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm'
import { IdSecuenciaEntity } from './entity/id-secuencia.entity';
import { IdSecuenciaDto } from './dto/id-secuencia.dto';



@Injectable()
export class IdSecuenciaService {
    result: any
    constructor(
        @InjectRepository(IdSecuenciaEntity)
        private readonly repository: Repository<IdSecuenciaEntity>,
        private readonly dataSource: DataSource
    ) { }

    async funct_genera_factura_s(id: number, body: IdSecuenciaDto) {
        const numFactura = await this.dataSource.manager.findOne(this.repository.target, {
            where: { id: 1 },
            lock: { mode: 'pessimistic_write' },
        });
    }

    async funct_retorna_factura_s(): Promise<IdSecuenciaEntity> {
        const result = await this.repository.findOne({
            where: {
                id: 1
            }
        })
        return result
    }

}
