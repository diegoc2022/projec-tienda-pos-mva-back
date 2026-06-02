/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCajaEntity } from './entity/apertura-caja.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateCajaDto } from './dto/apertura-caja.dto';

@Injectable()
export class CajaService {
  constructor(
    @InjectRepository(CreateCajaEntity)
    private cajaRepository: Repository<CreateCajaEntity>
  ) { }

  async funct_actualiza_apertura_caja_s(id: number, data: UpdateCajaDto): Promise<CreateCajaEntity> {
    const caja = await this.cajaRepository.preload({
      id,
      ...data,
    });

    if (!caja) {
      throw new NotFoundException('Caja no encontrada');
    }
    return await this.cajaRepository.save(caja);
  }



  async funct_retorna_apertura_caja_s(user: string): Promise<CreateCajaEntity> {
    const result = await this.cajaRepository.findOne({
      where: {
        vendedor: user
      },
      order: { id: 'DESC' }
    });

    if (!result) {
      throw new Error('No hay caja abierta');
    }

    return result;
  }

}

