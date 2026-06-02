
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { VinculosService } from './vinculosService';
import { CreateVinculosDTO } from 'src/components/viculos/dto/create_vinculos.dto';

@Controller('vinculos')
export class VinculosController {
    constructor(
        private vinculosService: VinculosService
    ) { }

    @Post()
    funct_registra_vinculos_c(@Body() createVinculosDto: CreateVinculosDTO) {
        return this.vinculosService.funct_registra_vinculos_s(createVinculosDto);
    }

    @Get(':id')
    async funct_retorna_codigo_inicial_c(@Param('id') id: any) {
        return await this.vinculosService.funct_retorna_un_vinculo_s(id);
    }

    @Get('/vinc/:id')
    async funct_retorna_codigo_vinculo_c(@Param('id') id: any) {
        return await this.vinculosService.funct_retorna_asociacion_vinculo_s(id);
    }

    @Get()
    funct_retorna_full_vinculos_c() {
        return this.vinculosService.funct_retorna_full_vinculos_s();
    }

    @Delete(':codVinc')
    funct_elimina_viculos_c(@Param('codVinc') codVinc: any) {
        return this.vinculosService.funct_elimina_vinculos_s(codVinc)
    }
}
