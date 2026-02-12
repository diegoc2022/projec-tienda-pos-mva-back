import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GastosService } from './gastos.service';
import { GastosDto } from './dto/gastos.dto';

@Controller('gastos')
export class GastosController {
    constructor(
        private services:GastosService
    ){}

    @Post()
    async funct_registra_gastos_c(@Body() data:GastosDto){
      return await this.services.funct_registra_gastos_opertivos_s(data)
    }

    @Get(':fecha_inic/:fecha_fin')
    async funct_retorna_gastos_operativos_c(@Param('fecha_inic') fecha_inic:any, @Param('fecha_fin') fecha_fin:any){
        return await this.services.funct_retorna_gastos_operativos_s(fecha_inic,fecha_fin)
    }
}
