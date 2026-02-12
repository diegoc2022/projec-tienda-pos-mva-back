
import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { CajaService } from './caja.service';
import { UpdateCajaDto } from './dto/apertura-caja.dto';


@Controller('caja')
export class CajaController {

    constructor(private cajaService: CajaService) { }

    @Put(':id')
    async funct_actualiza_apertura_caja_c(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateCajaDto) {
        return await this.cajaService.funct_actualiza_apertura_caja_s(id, data);
    }

    @Get(':user')
    async funct_retorna_apertura_caja_c(@Param('user') user: string) {
        return await this.cajaService.funct_retorna_apertura_caja_s(user);
    }


}
