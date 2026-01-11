import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ComprasHistoricoService } from './compras-historico.service';
import { ComprasHistoricoDto } from './dto/compras-historico.dto';
import { ComprasHistoricoEntity } from './entity/compras-historico.entity';

@Controller('compras-historico')
export class ComprasHistoricoController {
    constructor(private compras_h:ComprasHistoricoService){}

    @Post()
    async funct_create_compras_historico(@Body() data:ComprasHistoricoDto){
        return await this.compras_h.funct_create_compras_historico_s(data);
    }

    @Get(':fact')
    async funct_retorna_facturas_compras_c(@Param('fact') fact:any){
      return await this.compras_h.funt_retorna_facturas_compras_s(fact);
    }

    @Delete(':fact')
    async funct_elimina_facturas_compras_c(@Param('fact') fact:any){
      return await this.compras_h.funt_elimina_facturas_compras_s(fact);
    }

    @Get('result/:fecha_inic/:fecha_fin')
    async funct_retorna_compras_historicos_c(@Param('fecha_inic') fecha_inic:any, @Param('fecha_fin') fecha_fin:any){
      return await this.compras_h.funct_retorna_compras_historicos_s(fecha_inic,fecha_fin);
    }
}
