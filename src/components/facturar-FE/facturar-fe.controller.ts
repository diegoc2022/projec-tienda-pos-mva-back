import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FacturarFeService } from './facturar-fe.service';
import { CreateInvoiceDto } from './dto/create-invoice-fe.dto';


@Controller('facturar-fe')
export class FacturarFeController {
  constructor(private readonly facturarFeService: FacturarFeService) { }

  @Post()
  funct_generate_factura_fe_c(@Body() createFacturarFeDto: CreateInvoiceDto) {
    return this.facturarFeService.funct_generate_factura_fe_s(createFacturarFeDto);
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
  update(@Param('id') id: string, @Body() updateFacturarFeDto: any) {
    return this.facturarFeService.update(+id, updateFacturarFeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.facturarFeService.remove(+id);
  }
}
