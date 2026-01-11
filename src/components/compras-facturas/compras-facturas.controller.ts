
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ComprasFacturasService } from './compras-facturas.service';
import { CreateComprasFacturasDto } from './dto/createComprasFacturas.dto';

@Controller('compras-facturas')
export class ComprasFacturasController {
    constructor(private comprasFacturasService:ComprasFacturasService){}

    @Get(':id')
    functGetComprasFacturas(@Param('id') factura:string){        
        return this.comprasFacturasService.functRetornaComprasFacturas(factura);
    }

    @Post()
    functCreateComprasFacturas(@Body() num:string){
        return this.comprasFacturasService.functCreateComprasFacturas(num);
    }

    @Delete(':fact')
    funct_elimina_facturas_compras_c(@Param('fact') fact:any){
        return  this.comprasFacturasService.funct_elimina_compra_facturas_s(fact);
    }
}
