import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm'
import { IdSecuenciaFactEntity } from './entity/id-secuencia.entity';
import { IdSecuenciaFactDto } from './dto/id-secuencia.dto';



@Injectable()
export class IdSecuenciaService {
    result: any
    constructor(
        @InjectRepository(IdSecuenciaFactEntity)
        private readonly repository: Repository<IdSecuenciaFactEntity>,
        private readonly dataSource: DataSource
    ) { }

    async funct_genera_factura_s(body: IdSecuenciaFactDto) {
        const { numero_factura } = body[0]
        const queryRunner = this.dataSource.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            // 1️⃣ Bloqueo de la secuencia
            const secuencia = await queryRunner.manager.findOne(
                this.repository.target,
                {
                    where: { id: 1 },
                    lock: { mode: 'pessimistic_write' },
                },
            );

            if (!secuencia) {
                throw new Error('Secuencia de factura no encontrada');
            }

            // 2️⃣ Cálculos
            let numeroFactura = Number(numero_factura)
            const consecutivoFactura = secuencia.consecutivo_autorizado;
            const consecutivoDisponible = consecutivoFactura - numeroFactura;

            // 3️⃣ UPDATE
            await queryRunner.manager.update(
                this.repository.target,
                { id: 1 },
                {
                    num_secuencia: numeroFactura,
                    consecutivo_disponible: consecutivoDisponible,
                    fecha_registro: Date.now()
                        ? new Date()
                        : new Date(),
                },
            );

            await queryRunner.commitTransaction();
        } catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        } finally {
            await queryRunner.release();
        }
    }


    async funct_retorna_factura_s(): Promise<IdSecuenciaFactEntity> {
        const result = await this.repository.findOne({
            where: {
                id: 1
            }
        })
        return result
    }

}
