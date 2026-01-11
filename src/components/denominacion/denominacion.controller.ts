import { Controller, Get } from '@nestjs/common';
import { DenominacionService } from './denominacion.service';

@Controller('denomin')
export class DenominacionController {
    constructor(private denomiServices:DenominacionService){}

    @Get()
    getDenominacion(){
        return this.denomiServices.getDenominacion();
    }
}
