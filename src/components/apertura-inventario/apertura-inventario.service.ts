import { Injectable, NotFoundException } from '@nestjs/common';
import { AperturaInventarioDto } from './dto/apertura-inventario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AperturaInventario } from './entities/apertura-inventario.entity';
import { Repository } from 'typeorm';


@Injectable()
export class AperturaInventarioService {
  constructor(
    @InjectRepository(AperturaInventario)
    private repository: Repository<AperturaInventario>
  ) { }

  async funct_genera_id_inventario_s(id: number, data: AperturaInventarioDto) {
    const inv = await this.repository.preload({
      id,
      ...data,
    });

    if (!inv) {
      throw new NotFoundException('Apertura no encontrada');
    }
    return await this.repository.save(inv);
  }

  async funct_retorna_id_inventario_s() {
    const invent = await this.repository.find();
    return invent
  }

}
