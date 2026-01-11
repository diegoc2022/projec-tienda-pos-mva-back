import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProveedoresService } from './proveedores.service';
import { CreateProveedorDto } from 'src/components/proveedores/dto/create-proveedores.dto';

@Controller('proveedores')
export class ProveedoresController {
    constructor(private proveedorServices:ProveedoresService){}

    @Post()
   async create_proveedor(@Body() newProveedor:CreateProveedorDto){
        return await this.proveedorServices.create_proveedor(newProveedor);       
    }

    @Get()
   async retorna_proveedor_all(){
        return await this.proveedorServices.retorna_proveedores_all();       
    }

}
