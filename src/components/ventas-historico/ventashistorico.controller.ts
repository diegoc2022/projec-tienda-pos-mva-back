
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { VentasHistoricosService } from './ventashistorico.service';
import { VentasHistoricosDto } from './dto/create-ventas-historico.dto';

@Controller('ventas-historicos')
export class VentashistoricoController {
    constructor(private services:VentasHistoricosService){}

    @Post()
    async functCreateVentasHistoricos(@Body() data:VentasHistoricosDto){        
        return await this.services.funct_registra_ventas_historicos_s(data);
    }

    @Get(':fecha_inic/:fecha_fin')
    async funct_retorna_ventas_historicos_c(@Param('fecha_inic') fecha_inic:any, @Param('fecha_fin') fecha_fin:any){
       return await this.services.funct_retorna_ventas_historicos_s(fecha_inic,fecha_fin); 
    }
}
