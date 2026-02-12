import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateVentaProductosDto } from 'src/components/ventas-temp/dto/create_venta_productos.dto';
import { UpdateVentaProductosDto } from 'src/components/ventas-temp/dto/update_ventas.dto';
import { VentasProductosEntity } from 'src/components/ventas-temp/entity/create_venta_productos.entity';
import { Repository } from 'typeorm';


@Injectable()
export class VentasProductosService {
  constructor(
    @InjectRepository(VentasProductosEntity)
    private ventasRepository: Repository<VentasProductosEntity>
  ) { }

  functRetornaVentasService() {
    return this.ventasRepository.find();
  }

  async functRetornaVentasIdCaja(id: number) {
    return await this.ventasRepository.find({
      where: { id_caja: id }
    })
  }

  async functRegistraVentasService(ventasProductos: CreateVentaProductosDto[]) {
    const create_v = this.ventasRepository.create(ventasProductos);
    return await this.ventasRepository.save(create_v);
  }

  async functEditaVentasService(id: number, cod: string, updateVentasDto: UpdateVentaProductosDto) {
    return await this.ventasRepository.update({ id: id, codProd: cod }, { cantidad: updateVentasDto.cantidad, subtotal: updateVentasDto.subtotal });
  }

  async funct_elimina_item_ventas(id: number, cod: string) {
    return await this.ventasRepository.delete({ id: id, codProd: cod });
  }

  async funct_elimina_id_ventas(data: any[]) {
    return await data.map(resp => {
      this.ventasRepository.delete({ id: resp.id });
    })
  }

  async funt_retorna_ventas_facturas(id: any) {
    return await this.ventasRepository.find({
      where: {
        factura: id
      }
    })
  }

  async funt_elima_ventas_temporal_s() {
    return await this.ventasRepository.clear();
  }

}
