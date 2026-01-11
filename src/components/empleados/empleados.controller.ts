import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { EmpleadosDto } from './dto/empleados.dto';

@Controller('empleados')
export class EmpleadosController {
    constructor(private empleadoServices:EmpleadosService){}

    @Post()
    async funct_registra_empleados_c(@Body() newEmpleado:EmpleadosDto){
        return await this.empleadoServices.funct_registra_empleados_s(newEmpleado);       
    }

    @Get()
    async funct_retorna_empleados_c(){
        return await this.empleadoServices.funct_retorna_empleados_s();       
    }

    @Get('empleado/:ced')
    async funct_retorna_one_empleados_s(@Param('ced') ced:any){
        return await this.empleadoServices.funct_retorna_one_empleados_s(ced);
    }
}
