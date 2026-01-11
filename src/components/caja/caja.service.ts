/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { CreateCajaEntity } from './entity/create-caja.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCajaDto } from './dto/create-caja.dto';
import { EstadoCajaDto } from './dto/estado_caja.dto';

@Injectable()
export class CajaService {
    constructor(
        @InjectRepository(CreateCajaEntity)
        private cajaRepository:Repository<CreateCajaEntity>
        ){}

      async  functCreateCaja(data:CreateCajaDto):Promise<CreateCajaEntity>{            
           const createCaja = this.cajaRepository.create(data);
           return await this.cajaRepository.save(createCaja);
        }

     async getIdAperturaCaja():Promise<CreateCajaEntity>{
          const result = await this.cajaRepository            
          .createQueryBuilder('alias') // Replace 'alias' with your desired alias
          .orderBy('alias.id', 'DESC') // Replace 'id' with the primary key or sorting column
          .limit(1) // Limit the result to 1 row
          .getOne();                                
          return result;
      }

     async funct_cierra_apertura_caja(id:any,estado:EstadoCajaDto){                
       return await this.cajaRepository.update({id:id},{estado:estado.estado})
      }
 }

