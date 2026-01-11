
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PagosService } from './pagos.service';
import { PagosDto } from './dto/pagos.dto';

@Controller('pagos')
export class PagosController {
    constructor(
        private service:PagosService
    ){}

    @Post()
   async funct_registra_pagos(@Body() data:PagosDto[]){
        return await this.service.funct_registra_pagos(data);
    }

    @Get(':cod/:id')
   async funct_retorna_pagos_c(@Param('cod') cod:any, @Param('id') id:any){
        return await this.service.funct_retorna_pagos_s(cod,id);
    }
}
