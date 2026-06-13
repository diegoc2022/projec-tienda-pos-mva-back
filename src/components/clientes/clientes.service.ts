import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientesEntity } from './entity/clientes.entity';
import { Repository } from 'typeorm';
import { format } from 'date-fns';
import { formatearFechaDDMMYYYY, extraerSoloFecha } from '../../utils/date-formatter';

@Injectable()
export class ClientesService {
    fecha_actual: Date = new Date();
    constructor(
        @InjectRepository(ClientesEntity)
        private repository: Repository<ClientesEntity>
    ) { }

    async funct_registra_clientes_s(data: any) {
        const fecha = format(this.fecha_actual, 'yyyy-MM-dd HH:mm');
        const result = await this.repository.find({
            where: {
                codigo_cliente: data.cedula
            }
        })

        if (result.length > 0) {
            return {
                status: 409,
                msg: 'Ya existe un registro con estas misma caracteristicas'
            }
        } else {
            return this.repository.save({
                codigo_cliente: data.cedula,
                nombre: data.nombre_cliente.toUpperCase(),
                telefono: data.telefono,
                codigo_venta: 1,
                fecha_registro: fecha
            });
        }

    }

    async funct_retorna_clientes_s() {
        return await this.repository.find();
    }


    async funct_retorna_one_cliente_s(data: any) {
        return await this.repository.find({
            where: {
                codigo_cliente: data
            }
        })
    }

    async funct_edita_codigo_venta(data: any) {
        let result = await this.repository.findOne({
            where: {
                codigo_cliente: data.codigo_cliente
            }
        })

        if (result) {
            let codigo_venta = result.codigo_venta + 1;
            this.repository.update({ codigo_cliente: result.codigo_cliente }, { codigo_venta: codigo_venta });
            return {
                status: 200,
                msg: 'Código venta actualizado correctamente'
            }
        } else {
            return {
                status: 412,
                msg: 'Error en validaciones previas'
            }
        }
    }

}
