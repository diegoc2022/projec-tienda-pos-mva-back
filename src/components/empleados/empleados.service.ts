import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmpleadosEntity } from './entity/empleados.entity';

@Injectable()
export class EmpleadosService {

    constructor(
        @InjectRepository(EmpleadosEntity)
        private repositoryEmpleado: Repository<EmpleadosEntity>        
    ){}
  
    async funct_registra_empleados_s(data: any): Promise<EmpleadosEntity | { msg: string; code: number }> {
          // Verificar si ya existe un empleado con el mismo NIT
          const empleadoExistente = await this.repositoryEmpleado.findOne({
            where: { cedula: data.cedula },
          });
        
          // Si el empleado ya existe, devolver un mensaje de error
          if (empleadoExistente) {
            return {
              msg: 'La cédula que intenta registrar, ya existe en base de datos',
              code: 409,
            };
          }          
          // Guardar el nuevo empleado en la base de datos
          return await this.repositoryEmpleado.save(data);
      }
  
     async funct_retorna_empleados_s(): Promise<EmpleadosEntity[]>{
        return await this.repositoryEmpleado.find();        
    }

    async funct_retorna_one_empleados_s(ced:any){
      return await this.repositoryEmpleado.find({
        where:{
            cedula:ced
        }
      })       
  }
}
