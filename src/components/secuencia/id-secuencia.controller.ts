
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { IdSecuenciaService } from './id-secuencia.service';
import { IdSecuenciaDto } from './dto/id-secuencia.dto';



@Controller('secuencia')
export class IdSecuenciaController {
  constructor(
    private secuenciaService: IdSecuenciaService
  ) { }

  @Put()
  funct_genera_factura_c(@Body() body: IdSecuenciaDto) {
    return this.secuenciaService.funct_genera_factura_s(body)
  }

  @Get()
  async funct_retorna_factura_c() {
    return await this.secuenciaService.funct_retorna_factura_s()
  }

}
