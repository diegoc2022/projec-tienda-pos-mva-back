import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProveedoresEntity } from 'src/components/proveedores/entity/proveedores.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProveedoresService {
    
    constructor(
      @InjectRepository(ProveedoresEntity)
      private repositoryProveedor: Repository<ProveedoresEntity>        
    ){}

    async create_proveedor(data: any): Promise<ProveedoresEntity | { msg: string; code: number }> {
        // Verificar si ya existe un proveedor con el mismo NIT
        const proveedorExistente = await this.repositoryProveedor.findOne({
          where: { nit: data.nit },
        });
      
        // Si el proveedor ya existe, devolver un mensaje de error
        if (proveedorExistente) {
          return {
            msg: 'El Nit que intenta registrar, ya existe en base de datos',
            code: 409,
          };
        }          
        // Guardar el nuevo proveedor en la base de datos
        return await this.repositoryProveedor.save(data);
    }

   async retorna_proveedores_all(): Promise<ProveedoresEntity[]>{
        return await this.repositoryProveedor.find();        
    }
}
