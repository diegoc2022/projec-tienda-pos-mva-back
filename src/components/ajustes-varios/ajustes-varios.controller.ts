import { Body, Controller, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { AjustesVariosService } from './ajustes-varios.service';
import { EditaPreciosDto } from './dto/edita-precios.dto';
import { EditaProductosDto } from './dto/edita.dto';

@Controller('editar')
export class AjustesVariosController {

    constructor(
        private editaPreciosService: AjustesVariosService
    ) { }

    @Patch('precioVentas/:cod')
    async funct_edita_precio_ventas_c(@Param('cod') cod: string, @Body() precio: EditaPreciosDto) {
        return await this.editaPreciosService.funct_edita_precio_ventas_s(cod, precio);
    }

    @Patch('codigo/:id')
    async funct_edita_producto_c(@Param('id') id: string, @Body() codigo: EditaProductosDto) {
        return await this.editaPreciosService.funct_edita_producto_s(id, codigo);
    }

    @Patch('cantidad/:id')
    async funct_edita_existencia_c(@Param('id') id: any, @Body() cant: EditaProductosDto) {
        return await this.editaPreciosService.funct_edita_existencia_s(id, cant);
    }

    @Patch('precioCompras/:id')
    async functedita_precio_compra_c(@Param('id') id: any, @Body() precio: EditaPreciosDto) {
        return await this.editaPreciosService.funct_edita_precio_compras_s(id, precio);
    }

    @Patch('activar/:id')
    async funct_activa_asociacion_unidad(@Param('id') id: any, @Body() check: EditaProductosDto) {
        return await this.editaPreciosService.funct_activa_asociacion_unidad(id, check);
    }

    @Patch('producto/:id')
    async funct_edita_nombre_producto_c(@Param('id') id: any, @Body() data: EditaProductosDto) {
        return await this.editaPreciosService.funct_edita_nombre_producto_s(id, data);
    }
}
