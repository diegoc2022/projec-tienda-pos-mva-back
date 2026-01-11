import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { CreateVinculosDTO } from 'src/components/viculos/dto/create_vinculos.dto';
import { VinculosEntity } from './entity/create-vinculos.entity';


@Injectable()
export class VinculosService {
  constructor(
    @InjectRepository(VinculosEntity) private vinculosRepository: Repository<VinculosEntity>
  ) { }

  async getVinculosId(id: string) {
    const codigo = id.toUpperCase();

    // Primero busca por codigoInicial
    let result = await this.vinculosRepository.find({
      where: {
        codigoInicial: codigo.toUpperCase()
      },
      relations: ['producto']
    });

    // Si no encuentra por codigoInicial, busca por codigoVinculo
    if (result.length === 0) {
      result = await this.vinculosRepository.find({
        where: {
          codigoVinculo: codigo.toUpperCase()
        },
        relations: ['producto']
      });
    }

    // Si encuentra algo en cualquiera de las dos búsquedas, lo retorna
    if (result.length > 0) {
      return result;
    } else {
      return {
        statusCode: 404,
        message: 'El producto que intenta vender no existe o no se encuentra asociado',
        error: 'Not Found'
      };
    }
  }



  async functCreateVinculos(data: CreateVinculosDTO) {
    const codigoInicial = data.codigoInicial.toUpperCase();
    const codigoVinculo = data.codigoVinculo.toUpperCase();

    try {
      // Verificar si ya existe un vínculo con esa combinación
      const existe = await this.vinculosRepository.findOne({
        where: {
          codigoInicial,
          codigoVinculo
        }
      });

      if (existe) {
        return {
          code: 409,
          msg: 'Ya existe un registro con esas mismas características'
        };
      }

      // Crear entidad sin ID
      const nuevoVinculo = this.vinculosRepository.create({
        codigoInicial,
        codigoVinculo
      });

      // Guardar en base de datos
      const saved = await this.vinculosRepository.save(nuevoVinculo);

      return {
        code: 201,
        msg: 'Vínculo creado exitosamente',
        data: saved
      };

    } catch (error) {
      if (error.code === '23505') {
        // Código PostgreSQL para clave duplicada
        return {
          code: 409,
          msg: 'Error: ya existe un vínculo con ese ID'
        };
      }

      // Otros errores no controlados
      console.error('Error al crear vínculo:', error);
      return {
        code: 500,
        msg: 'Error interno del servidor'
      };
    }
  }

  getVinculos() {
    return this.vinculosRepository.find({
      relations: ['producto']
    });
  }

  async eliminaVinculos(codInic: string, codVinc: string) {
    const result = await this.vinculosRepository.find({
      where: {
        codigoInicial: codInic.toUpperCase(),
        codigoVinculo: codVinc.toUpperCase()
      },
      relations: ['producto']
    })

    if (result.length > 0) {
      return await this.vinculosRepository.delete({ codigoInicial: codInic, codigoVinculo: codVinc });
    } else {
      return {
        "code": 409,
        "msg": "El viculo que intenta eliminar no existe"
      }
    }

  }

}
