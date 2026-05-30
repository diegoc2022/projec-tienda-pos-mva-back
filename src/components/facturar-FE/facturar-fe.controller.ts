import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FacturarFeService } from './facturar-fe.service';
import { CreateFacturarFeDto } from './dto/create-facturar-fe.dto';
import { UpdateFacturarFeDto } from './dto/update-facturar-fe.dto';

@Controller('facturar-fe')
export class FacturarFeController {
  constructor(private readonly facturarFeService: FacturarFeService) {}

  @Post()
  create(@Body() createFacturarFeDto: CreateFacturarFeDto) {
    return this.facturarFeService.create(createFacturarFeDto);
  }

  @Get()
  findAll() {
    return this.facturarFeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.facturarFeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFacturarFeDto: UpdateFacturarFeDto) {
    return this.facturarFeService.update(+id, updateFacturarFeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.facturarFeService.remove(+id);
  }
}
