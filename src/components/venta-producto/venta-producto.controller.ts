import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PrecioVentasService } from './venta-producto.service';
import { EditaPreciosDto } from 'src/components/venta-producto/dto/edita-precios.dto';

@Controller('venta-producto')
export class PrecioVentasController {
    constructor(
        private ventasServices:PrecioVentasService, 
    ){}

    @Get(':id')
   async retornaProductos(@Param('id') id:string){                 
        return await this.ventasServices.retornaPrecioVentas(id);
    }

    @Get()
   async retornaAllCompras(){                 
        return await this.ventasServices.retornaAllPrecioventas();
    }


    @Patch(':cod')
    async functEditaVentas(@Param('cod') cod:string, @Body() updateVerntaProductos:EditaPreciosDto){    
        return await this.ventasServices.editaPrecioVenta(cod,updateVerntaProductos);
    } 
  
    @Post()
    async createProducto(@Body() data: any){            
        return await this.ventasServices.createProducto(data);
    }

    @Delete(':cod')
    async funct_elimina_productos_c(@Param('cod') cod:any){            
        return await this.ventasServices.funct_elimina_producto_s(cod)
    }

}
