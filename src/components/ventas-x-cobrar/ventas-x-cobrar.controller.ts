import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { VentasXCobrarService } from './ventas-x-cobrar.service';
import { VentasXCobrarDto } from './dto/ventas-x-cobrar.dto';

@Controller('ventas-x-cobrar')
export class VentasXCobrarController {
    constructor(
        private service:VentasXCobrarService
    ){}

    @Post(':codigoc/:codigov')
    funct_registra_ventas_x_cobrar_c(
    @Param('codigoc') codigoc: any,
    @Param('codigov') codigov: any,
    @Body() data: VentasXCobrarDto[]
    ) {
        return this.service.funct_registra_ventas_x_cobrar(codigoc, codigov, data);
    }

    @Get()
    funct_retorna_ventas_x_cobrar(){
        return this.service.funct_retorna_ventas_x_cobrar();
    }

    @Get('ventas/:cod/:id')
        funct_consulta_ventas_x_clientes_c(@Param('cod') cod:any,@Param('id') id:any){
            return this.service.funct_consulta_ventas_x_cliente_s(cod,id);
    }

    @Patch(':cod/:id')
    funct_actualiza_estado_ventas_c(@Param('cod') cod:any, @Param('id') id:any, @Body() estado:any){
        return this.service.funct_actualiza_estado_ventas_s(cod, id, estado);
    }
}
