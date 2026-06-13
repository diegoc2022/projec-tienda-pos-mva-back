
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ComprasEntity } from './entity/compras.entity';
import { Repository } from 'typeorm';
import { ComprasDto } from './dto/compras.dto';

@Injectable()
export class ComprasService {
    constructor(
        @InjectRepository(ComprasEntity)
        private compras: Repository<ComprasEntity>
    ) { }

    async functCreateCompras(createCompras: ComprasDto): Promise<ComprasEntity> {
        return await this.compras.save(createCompras);
    }

    async functRetornaCompras(): Promise<ComprasEntity[]> {
        return await this.compras.find();
    }

    async functEliminaItemCompras(id: any): Promise<boolean> {
        const result = await this.compras.delete({ id: id });
        return result.affected > 0;
    }

    async functEliminaFacturaCompras(id: any): Promise<boolean> {
        const result = await this.compras.delete({ num_factura: id });
        return result.affected > 0;
    }

    async funct_elimina_facturas_compras_temp() {
        return await this.compras.clear();
    }

}
