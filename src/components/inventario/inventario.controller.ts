import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { InventarioService } from './inventario.service';


@Controller('inventario')
export class InventarioController {
    constructor(private inventarioService: InventarioService) { }

    @Patch()
    async funt_edita_compras_inventarios_c(@Body() data: any): Promise<any> {
        return await this.inventarioService.funct_edita_compras_inventarios_s(data);
    }

    @Get()
    async funct_retorna_inventario() {
        return await this.inventarioService.funct_retorna_inventario();
    }

}
