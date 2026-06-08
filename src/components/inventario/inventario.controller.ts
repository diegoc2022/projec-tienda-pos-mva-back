import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { InventarioService } from './inventario.service';
import { CreateInventarioDto } from './dto/create-inventario';

@Controller('inventario')
export class InventarioController {
    constructor(
        private inventarioService: InventarioService
    ) { }

    @Post()
    async funct_registra_inventario_c(@Body() data: CreateInventarioDto) {
        this.inventarioService.funct_registra_inventarios_s(data);
    }

    @Patch()
    async funt_edita_compras_inventarios_c(@Body() data: any): Promise<any> {
        return await this.inventarioService.funct_edita_compras_inventarios_s(data);
    }

    @Get()
    async funct_retorna_inventario() {
        return await this.inventarioService.funct_retorna_inventario();
    }

    @Get('inv_actual/:id/:tipo')
    async funct_retorna_inventario_x_id_c(@Param('id') id: number, @Param('tipo') tipo: any) {
        return await this.inventarioService.funct_retorna_inventario_x_id_s(id, tipo);
    }

}
