/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDenominacionEntity } from './entity/create-denominacion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DenominacionService {
    constructor(
        @InjectRepository(CreateDenominacionEntity) 
        private denomiRepository: Repository<CreateDenominacionEntity> 
    ){}

    getDenominacion(){
        return this.denomiRepository.find();
    }
}
