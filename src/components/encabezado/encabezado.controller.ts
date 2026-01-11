import { Controller, Get } from '@nestjs/common';
import { EncabezadoService } from './encabezado.service';

@Controller('encabezado')
export class EncabezadoController {
    constructor(private encabezadoService: EncabezadoService){}

    @Get()
    functRetornaEncabezado(){
        return this.encabezadoService.functRetornaEncabezado();
    }
}
