import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EncabezadoFacturaEntity } from './entity/encabezado_factura.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EncabezadoService {
    constructor(
        @InjectRepository(EncabezadoFacturaEntity)
        private encabezadoRepository:Repository<EncabezadoFacturaEntity>           
    ){}

    functRetornaEncabezado(){
        return this.encabezadoRepository.find();    
    }
}
