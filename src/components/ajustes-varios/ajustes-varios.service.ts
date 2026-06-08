import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VentaProductoEntity } from '../venta-producto/entity/create_venta_producto.entity';
import { EditaPreciosDto } from './dto/edita-precios.dto';
import { EditaProductosDto } from './dto/edita.dto';

@Injectable()
export class AjustesVariosService {
  fecha_actual = new Date();
  constructor(
    @InjectRepository(VentaProductoEntity)
    private ventasRepository: Repository<VentaProductoEntity>
  ) { }


  async funct_edita_precio_ventas_s(id: any, precio: EditaPreciosDto): Promise<VentaProductoEntity> {
    const producto = await this.ventasRepository.findOne({
      where: {
        codProd: id.toUpperCase(),
      },
    });

    if (!producto) {
      throw new NotFoundException(`Producto con código ${id} no encontrado`);
    }

    //const total_unds = producto.existencia + cant.existencia; 
    producto.precio_venta = precio.precio_venta
    producto.createAt = new Date();
    return await this.ventasRepository.save(producto);
  }

  async funct_edita_existencia_s(id: any, cant: EditaProductosDto): Promise<VentaProductoEntity> {
    const producto = await this.ventasRepository.findOne({
      where: {
        codProd: id.toUpperCase(),
      },
    });

    if (!producto) {
      throw new NotFoundException(`Producto con código ${id} no encontrado`);
    }
    //const total_unds = producto.existencia + cant.existencia;      
    producto.existencia = cant.existencia;
    producto.createAt = new Date();
    return await this.ventasRepository.save(producto);
  }

  async funct_edita_precio_compras_s(id: any, precio: EditaPreciosDto): Promise<VentaProductoEntity> {
    const producto = await this.ventasRepository.findOne({
      where: {
        codProd: id.toUpperCase(),
      },
    });

    if (!producto) {
      throw new NotFoundException(`Producto con código ${id} no encontrado`);
    }

    //const total_unds = producto.existencia + cant.existencia; 
    producto.precio_compra = precio.precio_compra
    producto.createAt = new Date();
    return await this.ventasRepository.save(producto);
  }


  async funct_edita_producto_s(id: string, codigo: EditaProductosDto): Promise<VentaProductoEntity | { status: number; msg: string }> {

    const producto = await this.ventasRepository.findOne({
      where: { codProd: id },
    });

    if (!producto) {
      throw new NotFoundException(`Producto con código ${id} no encontrado`);
    }

    // Verificar si el nuevo código ya existe
    /* const codigoExistente = await this.ventasRepository.findOne({
      where: { codProd: codigo.codProd },
    });

    if (codigoExistente) {
      return {
        status: 409,
        msg: `Ya existe en base de datos un producto registrado con este código: ${codigo.codProd}`,
      };
    } */
    producto.codProd = codigo.codProd;
    producto.descripcion = codigo.descripcion;
    producto.updated_at = new Date();
    return await this.ventasRepository.save(producto);
  }


  async funct_activa_asociacion_unidad(id: any, check: EditaProductosDto): Promise<VentaProductoEntity | { status: number; msg: string }> {
    // Buscar el producto por su código
    const producto = await this.ventasRepository.findOne({
      where: { codProd: id },
    });

    // Si el producto no existe, lanzar una excepción o devolver un mensaje
    if (!producto) {
      return {
        status: 409,
        msg: `El producto con código ${id} no existe en la base de datos.`,
      };
    }

    // Actualizar el campo 'venta_por_und' con el nuevo valor
    producto.venta_por_und = check.venta_por_und;
    producto.createAt = new Date();
    // Guardar la entidad actualizada
    return await this.ventasRepository.save(producto);
  }


  async funct_edita_nombre_producto_s(id: any, data: EditaProductosDto): Promise<VentaProductoEntity> {
    // Buscar el producto por su código
    const producto = await this.ventasRepository.findOne({
      where: { codProd: id },
    });

    // Si el producto no existe, lanzar una excepción o devolver un mensaje
    if (!producto) {
      throw new NotFoundException(`Producto con código ${id} no encontrado`);
    }
    // Actualizar el nombre del producto
    producto.descripcion = data.descripcion;
    producto.createAt = new Date();
    // Guardar la entidad actualizada
    return await this.ventasRepository.save(producto);
  }

}
