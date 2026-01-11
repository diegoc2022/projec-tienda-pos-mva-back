import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NominaService } from './nomina.service';
import { NominaDto } from './dto/nomina.dto';

@Controller('nomina')
export class NominaController {
    constructor(
        private service:NominaService
    ){}

    @Post()
    async funct_registra_nomina(@Body() data: any){       
            // Si data no es un array, convertirlo a array
            let dataArray: NominaDto[];
            if (Array.isArray(data)) {
                dataArray = data;
            } else {
                // Si es un objeto simple, convertirlo a array con un elemento
                dataArray = [data];
            }        
            return await this.service.funct_registra_nomina_s(dataArray);
        }

    @Get(':ced/:fecha_desde/:fecha_hasta')
    async funct_retorna_nomina_por_empleado_c(
        @Param('ced') ced: any, 
        @Param('fecha_desde') fecha_desde: any, 
        @Param('fecha_hasta') fecha_hasta: any
    ){
        return await this.service.funct_retorna_nomina_por_empleado_s(ced, fecha_desde, fecha_hasta);
    }

    @Get('/:num_mes/:num_year')
    async funct_retorna_nomina_c(       
        @Param('num_mes') num_mes: any, 
        @Param('num_year') num_year: any
    ){
        return this.service.funct_retorna_nimina_s(num_mes,num_year);
    }
}