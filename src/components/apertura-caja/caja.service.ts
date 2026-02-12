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
    const result = await this.cajaRepository
      .createQueryBuilder('alias') // Replace 'alias' with your desired alias
      .orderBy('alias.id', 'DESC') // Replace 'id' with the primary key or sorting column
      .limit(1) // Limit the result to 1 row
      .getOne();
    return result;
  }


}

