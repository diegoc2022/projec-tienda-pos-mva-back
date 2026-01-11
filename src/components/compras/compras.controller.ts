import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ComprasService } from './compras.service';
import { ComprasDto } from './dto/compras.dto';

@Controller('compras')
export class ComprasController {
    constructor(private comprasServices:ComprasService){}

    @Post()
    async functCreateCompras(@Body() createComprasDto:ComprasDto ){
        return await this.comprasServices.functCreateCompras(createComprasDto);
    }

    @Get()
    async functRetornaCompras(){
       return await this.comprasServices.functRetornaCompras();
    }   

    @Delete('item/:id')
    async functEliminaItemCompras(@Param('id') id:any){        
        return await this.comprasServices.functEliminaItemCompras(id);
    }

    @Delete('fact/:id')
    async functEliminaFacturaCompras(@Param('id') id:any){               
       return await this.comprasServices.functEliminaFacturaCompras(id);
    }

    @Delete()
    async funct_elimina_facturas_compras_temp(){
        return await this.comprasServices.funct_elimina_facturas_compras_temp();
    }
}
