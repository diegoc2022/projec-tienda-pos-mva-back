
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EditaPreciosDto } from 'src/components/venta-producto/dto/edita-precios.dto';
import { Repository } from 'typeorm';
import { VentaProductoEntity } from './entity/create_venta_producto.entity';

@Injectable()
export class PrecioVentasService {
    constructor(
        @InjectRepository(VentaProductoEntity)
        private ventasRepository: Repository<VentaProductoEntity>
    ) { }

    async retornaPrecioVentas(id: string): Promise<VentaProductoEntity> {
        return await this.ventasRepository.findOne({
            where: {
                codProd: id
            }
        })
    }

    async retornaAllPrecioventas(): Promise<VentaProductoEntity[]> {
        return await this.ventasRepository.find();
    }

    async editaPrecioVenta(cod: string, updateVentasDto: EditaPreciosDto): Promise<VentaProductoEntity> {
        // Buscar el producto por su código
        const producto = await this.ventasRepository.findOne({
            where: { codProd: cod },
        });

        // Si el producto no existe, lanzar una excepción
        if (!producto) {
            throw new NotFoundException(`Producto con código ${cod} no encontrado`);
        }
        // Actualizar el precio de venta
        producto.precio_venta = updateVentasDto.precio_venta;
        // Guardar el producto con el nuevo precio de venta
        return await this.ventasRepository.save(producto);
    }


    async createProducto(data: any) {
        const result = await this.ventasRepository.find({
            where: { codProd: data.codProd }
        })

        if (result.length > 0) {
            return {
                "code": 409,
                "msg": 'Error: El producto con id: ' + data.codProd + ' ya se encuentra registrado en base de datos'
            };
        } else {
            const newProduct = this.ventasRepository.create(data);
            return await this.ventasRepository.save(newProduct);
        }
    }

    async funct_elimina_producto_s(data: any) {
        return await this.ventasRepository.delete({ codProd: data })
    }
}
