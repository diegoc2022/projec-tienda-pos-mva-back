
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { VinculosService } from './vinculosService';
import { CreateVinculosDTO } from 'src/components/viculos/dto/create_vinculos.dto';

@Controller('vinculos')
export class VinculosController {
    constructor(
        private vinculosService:VinculosService        
    ){}

    @Post()
    functRegistraVinculos(@Body() createVinculosDto:CreateVinculosDTO){               
        return this.vinculosService.functCreateVinculos(createVinculosDto);                         
    }

    @Get(':id')
    async getVinculosId(@Param('id') id:string){        
        return await this.vinculosService.getVinculosId(id);        
    }   

    @Get()
    getVinculos(){
        return this.vinculosService.getVinculos();
    }

    @Delete(':codInic/:codVinc')
    eliminaViculos(@Param('codInic') codInic:string, @Param('codVinc') codVinc:string){
        return this.vinculosService.eliminaVinculos(codInic,codVinc)
    }
}
