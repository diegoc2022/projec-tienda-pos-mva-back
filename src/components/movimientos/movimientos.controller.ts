import { Body, Controller, Post, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { MovimientosService } from './movimientos.service';
import { MovimientosDto } from './dto/movimiento.dto';

@Controller('movimientos')
export class MovimientosController {
    constructor(
        private readonly movimientosService: MovimientosService,
    ) { }

    @Post('salida')
    async funct_registra_salidas_c(@Body() body: MovimientosDto[]) {
        return this.movimientosService.funct_registra_salidas_s(body);
    }

    @Post('stock')
    async funct_registra_movimientos_c(@Body() body: any[]) {
        return this.movimientosService.funct_registra_movimientos_s(body);
    }
}

