import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InventarioActualService } from './inventario-actual.service';
import { CreateInventarioActualDto } from './dto/create-inventario-actual.dto';
import { UpdateInventarioActualDto } from './dto/update-inventario-actual.dto';

@Controller('inventario-actual')
export class InventarioActualController {
  constructor(private readonly inventarioActualService: InventarioActualService) { }

  @Post()
  funct_create_inventario_actual_c(@Body() createInventarioActualDto: CreateInventarioActualDto[]) {
    return this.inventarioActualService.funct_create_inventario_actual_s(createInventarioActualDto);
  }

  @Get()
  funct_retorna_inventario_actual_c() {
    return this.inventarioActualService.funct_retorna_inventario_actual_s();
  }

  @Patch(':id')
  funct_edita_inventario_actual_c(@Param('id') id: string, @Body() updateInventarioActualDto: UpdateInventarioActualDto) {
    return this.inventarioActualService.funct_edita_inventario_actual_s(id, updateInventarioActualDto);
  }

  @Delete()
  funct_elimina_inventario_actual_c() {
    return this.inventarioActualService.funct_elimina_inventario_actual_s();
  }
}
