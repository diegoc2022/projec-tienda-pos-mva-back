/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VentasProductosEntity } from 'src/components/ventas/entity/create_venta_productos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CloseVentasService {
constructor(
    @InjectRepository(VentasProductosEntity)            
    private ventasRepository:Repository<VentasProductosEntity>       
){ }


    async functCloseVentasService(data:any[]){
        return await data.map(resp =>{           
            this.ventasRepository.update({id:resp.id},{estado:'cerrado1'});            
        })      
    }
}
