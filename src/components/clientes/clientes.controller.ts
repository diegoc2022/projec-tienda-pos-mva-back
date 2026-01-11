import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ClientesService } from './clientes.service';

@Controller('clientes')
export class ClientesController {
    constructor(
        private service:ClientesService
    ){}

    @Post()
   async funct_registra_clientes_c(@Body() data:any){
        return await this.service.funct_registra_clientes_s(data);
    }

    @Get()
    async funct_retorna_clientes_c(){
        return await this.service.funct_retorna_clientes_s();
    }

    @Get(':id')
    async funct_retorna_one_clientes_c(@Param('id') data:any){
        return await this.service.funct_retorna_one_cliente_s(data);
    }    

    @Patch()
    async funct_edita_codigo_venta(@Body() data:any){
        return await this.service.funct_edita_codigo_venta(data);
    }

}
