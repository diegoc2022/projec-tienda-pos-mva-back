
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { VentasProductosService } from './ventas_productos.service';
import { CreateVentaProductosDto } from './dto/create_venta_productos.dto';
import { UpdateVentaProductosDto } from 'src/components/ventas-temp/dto/update_ventas.dto';

@Controller('ventas-temp')
export class VentasProductosController {
  constructor(
    private ventaservice: VentasProductosService
  ) { }

  @Post()
  async functRegistraVentas(@Body() dataventa: CreateVentaProductosDto[]) {
    try {
      return await this.ventaservice.functRegistraVentasService(dataventa);
    } catch (error) {
      console.log("error: ", error);
      return error;
    }
  }

  @Get()
  async functRetornaVentas() {
    return await this.ventaservice.functRetornaVentasService();
  }

  @Get(':id')
  async functRetornaVentasIdCaja(@Param('id') id: number) {
    return await this.ventaservice.functRetornaVentasIdCaja(id);
  }

  @Get('factura/:id')
  async funt_retorna_ventas_facturas(@Param('id') id: any) {
    return await this.ventaservice.funt_retorna_ventas_facturas(id)
  }

  @Patch(':id/:cod')
  async functEditaVentas(@Param('id') id: number, @Param('cod') cod: string, @Body() updateVerntaProductos: UpdateVentaProductosDto) {
    return await this.ventaservice.functEditaVentasService(id, cod, updateVerntaProductos);
  }

  @Delete('item/:id/:cod')
  async funct_elimina_item_ventas(@Param('id') id: number, @Param('cod') cod: string) {
    return await this.ventaservice.funct_elimina_item_ventas(id, cod);
  }

  @Delete('vent/')
  async funct_elimina_id_ventas(@Body() data: any) {
    return await this.ventaservice.funct_elimina_id_ventas(data);
  }

  @Delete('ventas-temp/eliminar-todo')
  async funt_elimina_ventas_temporal_c() {
    return await this.ventaservice.funt_elima_ventas_temporal_s();
  }

}
