import { Body, Controller, Param, ParseIntPipe, Patch, Put } from '@nestjs/common';
import { CloseVentasService } from './close-ventas.service';
import { CloseVentasDto } from 'src/components/close-ventas/dto/close-ventas.dto';

@Controller('close-ventas')
export class CloseVentasController {

    constructor(
        private closeVentas:CloseVentasService    
    ){}

@Put()
 functCloseVentas(@Body() data:any){      
      return this.closeVentas.functCloseVentasService(data);     
  }
}
