
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CajaService } from './caja.service';
import { CreateCajaDto } from './dto/create-caja.dto';
import { EstadoCajaDto } from './dto/estado_caja.dto';

@Controller('caja')
export class CajaController {

    constructor(private cajaService:CajaService){}

    @Post()
    async functCreateCaja(@Body() data:CreateCajaDto){
        return await this.cajaService.functCreateCaja(data);
    }

    @Get()
   async getIdAperturaCaja(){
        return await this.cajaService.getIdAperturaCaja();
    }

    @Patch(':id')
   async funct_cierre_apertura_caja(@Param('id') id:any, @Body() estado:EstadoCajaDto){
        return await this.cajaService.funct_cierra_apertura_caja(id,estado)
    }
 }
