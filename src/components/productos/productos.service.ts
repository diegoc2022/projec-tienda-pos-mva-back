import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductosEntity } from './entity/productos.entity';
import { CreateProductoDto } from './dto/create_producto.dto';
import { CodigoProductoDto } from 'src/components/productos/dto/codigo_producto.dto';

@Injectable()
export class ProductosService {
    constructor(
        @InjectRepository(ProductosEntity) 
        private productosRepository: Repository<ProductosEntity>        
    ) {}


   async retornaProductos(id:CodigoProductoDto):Promise<ProductosEntity>{        
        const existeproducto = await this.productosRepository.findOneBy({
            codProd:id.codProd.toUpperCase()
        })       
        return existeproducto;         
    }

    funct_retorna_todos_los_productos(): Promise<ProductosEntity[]>{        
        return this.productosRepository.find();                
    }

    async createProducto(data: CreateProductoDto): Promise<ProductosEntity | { code: number; msg: string }> {
        // Verificar si ya existe un producto con el mismo código
        const productoExistente = await this.productosRepository.findOne({
          where: { codProd: data.codProd },
        });      
        // Si el producto ya existe, retornar un mensaje de error
        if (productoExistente) {
          return {
            code: 409,
            msg: `Error: Ya existe un producto con el código ${data.codProd}`,
          };
        }
      
        // Crear la nueva entidad de producto
        const nuevoProducto = this.productosRepository.create(data);      
        // Guardar el nuevo producto en la base de datos
        return await this.productosRepository.save(nuevoProducto);
    }
      
  
}
