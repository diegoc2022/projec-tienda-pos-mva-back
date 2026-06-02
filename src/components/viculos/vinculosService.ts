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

  async funct_retorna_un_vinculo_s(id: any) {
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

  async funct_retorna_asociacion_vinculo_s(id: any) {
    const codigo = id.toUpperCase();
    // Primero busca por codigoVinculo
    let result = await this.vinculosRepository.find({
      where: {
        codigoVinculo: codigo.toUpperCase()
      },
      relations: ['producto']
    });

    // Si encuentra algo por codigo vinculo, lo retorna
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


  async funct_registra_vinculos_s(data: CreateVinculosDTO | CreateVinculosDTO[],) {
    try {
      const registros = Array.isArray(data) ? data : [data];

      const registrosGuardar = [];
      const duplicados = [];

      for (const item of registros) {
        const codigoInicial = String(item.codigoInicial || '').toUpperCase();
        const codigoVinculo = String(item.codigoVinculo || '').toUpperCase();

        const existe = await this.vinculosRepository.findOne({
          where: {
            codigoInicial,
            codigoVinculo,
          },
        });

        if (existe) {
          duplicados.push({
            codigoInicial,
            codigoVinculo,
          });
          continue;
        }

        registrosGuardar.push({
          codigoInicial,
          codigoVinculo,
        });
      }

      if (registrosGuardar.length === 0) {
        return {
          code: 409,
          msg: 'Todos los registros ya existen',
          duplicados,
        };
      }

      const saved = await this.vinculosRepository.save(
        registrosGuardar,
      );

      return {
        code: 201,
        msg: `${saved.length} vínculo(s) creado(s) exitosamente`,
        creados: saved,
        duplicados,
      };
    } catch (error) {
      console.error('Error al crear vínculos:', error);

      return {
        code: 500,
        msg: 'Error interno del servidor',
      };
    }
  }

  funct_retorna_full_vinculos_s() {
    return this.vinculosRepository.find();
  }

  async funct_elimina_vinculos_s(codVinc: any) {
    const result = await this.vinculosRepository.find({
      where: {
        codigoVinculo: codVinc.toUpperCase()
      }
    })

    if (result.length > 0) {
      return await this.vinculosRepository.delete({ codigoVinculo: codVinc });
    } else {
      return {
        "code": 409,
        "msg": "El viculo que intenta eliminar no existe"
      }
    }

  }

}
