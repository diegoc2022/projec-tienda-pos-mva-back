import { Controller, Get, Body, Put, Param, ParseIntPipe } from '@nestjs/common';
import { AperturaInventarioService } from './apertura-inventario.service';
import { AperturaInventarioDto } from './dto/apertura-inventario.dto';

@Controller('apertura-inventario')
export class AperturaInventarioController {
  constructor(private readonly aperturaInventarioService: AperturaInventarioService) { }

  @Put(':id')
  funct_genera_id_inventario_c(@Param('id', ParseIntPipe) id: number, @Body() data: AperturaInventarioDto) {
    return this.aperturaInventarioService.funct_genera_id_inventario_s(id, data);
  }

  @Get()
  funct_retorna_inventario_c() {
    return this.aperturaInventarioService.funct_retorna_id_inventario_s();
  }

}
