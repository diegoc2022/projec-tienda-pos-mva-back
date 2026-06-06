import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InventarioActual } from './entities/inventario-actual.entity';
import { CreateInventarioActualDto } from './dto/create-inventario-actual.dto';
import { UpdateInventarioActualDto } from './dto/update-inventario-actual.dto';

@Injectable()
export class InventarioActualService {

  constructor(
    @InjectRepository(InventarioActual)
    private readonly repository: Repository<InventarioActual>
  ) { }

  async funct_create_inventario_actual_s(createInventarioActualDtos: CreateInventarioActualDto[],): Promise<InventarioActual[]> {
    const inventarios = this.repository.create(
      createInventarioActualDtos,
    );
    return await this.repository.save(inventarios);
  }

  funct_retorna_inventario_actual_s() {
    const result = this.repository.find();
    return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventarioActual`;
  }

  async funct_edita_inventario_actual_s(id: string, updateInventarioActualDto: UpdateInventarioActualDto,
  ) {
    const inventario = await this.repository.findOne({
      where: { codProd: id },
    });

    if (!inventario) {
      throw new NotFoundException(
        `No existe un inventario con id ${id}`,
      );
    }
    Object.assign(inventario, updateInventarioActualDto);

    return await this.repository.save(inventario);
  }

  async funct_elimina_inventario_actual_s(): Promise<void> {
    await this.repository.clear();
  }
}
