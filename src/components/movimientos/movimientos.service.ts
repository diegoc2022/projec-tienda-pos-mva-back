import { Injectable } from '@nestjs/common';
import { MovimientosEntity } from './entity/movimientos.entity';
import { Repository, DataSource } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { VentaProductoEntity } from '../venta-producto/entity/create_venta_producto.entity';
import { MovimientosDto } from './dto/movimiento.dto';
import { format } from 'date-fns';

@Injectable()
export class MovimientosService {
    result: any;
    fecha_actual = new Date();
    existencia: number = 0;

    constructor(
        @InjectRepository(MovimientosEntity)
        private movimientos: Repository<MovimientosEntity>,

        @InjectRepository(VentaProductoEntity)
        private ventaProducto: Repository<VentaProductoEntity>,
        private dataSource: DataSource
    ) { }




    async funct_registra_salidas_s(data: any[]) {
        if (!Array.isArray(data)) {
            throw new Error('Data no es un array');
        }

        const fecha = format(
            this.fecha_actual instanceof Date ? this.fecha_actual : new Date(),
            'yyyy-MM-dd HH:mm:ss'
        );

        // 1️⃣ Agrupar de forma SEGURA
        const mapa = new Map<string, {
            codProd: string;
            cantidad: number;
            factura: string;
            vendedor: string;
        }>();

        for (const raw of data) {

            // 🔐 codProd seguro
            const codProd = String(raw?.codProd ?? '').trim().toUpperCase();
            if (!codProd) {
                throw new Error('codProd inválido en data');
            }

            // 🔐 cantidad segura
            const cantidad = Number(raw?.cantidad);
            if (!Number.isFinite(cantidad) || cantidad <= 0) {
                throw new Error(`Cantidad inválida para ${codProd}`);
            }

            if (!mapa.has(codProd)) {
                mapa.set(codProd, {
                    codProd,
                    cantidad: 0,
                    factura: String(raw?.factura ?? ''),
                    vendedor: String(raw?.vendedor ?? ''),
                });
            }

            mapa.get(codProd)!.cantidad += cantidad;
        }

        const itemsUnicos = Array.from(mapa.values());
        // 2️⃣ Transacción
        const procesados = new Set<string>();

        await this.dataSource.transaction(async (manager) => {

            for (const item of itemsUnicos) {
                if (procesados.has(item.codProd)) continue;
                procesados.add(item.codProd);

                const producto = await manager.findOne(this.ventaProducto.target, {
                    where: { codProd: item.codProd },
                    lock: { mode: 'pessimistic_write' },
                });

                const stockAntes = producto.existencia;
                const stockDespues = stockAntes - item.cantidad;

                await manager.update(
                    this.ventaProducto.target,
                    { codProd: item.codProd },
                    {
                        existencia: stockDespues,
                        updatedAt: fecha,
                    }
                );

                await manager.insert(this.movimientos.target, {
                    codProd: item.codProd,
                    tipo: 'SALIDA',
                    cantidad: item.cantidad,
                    stock_antes: stockAntes,
                    stock_despues: stockDespues,
                    motivo: 'VENTA',
                    referencia: 'FAC' + item.factura,
                    vendedor: item.vendedor,
                    fecha_registro: fecha,
                });
            }
        });

        return {
            ok: true,
            mensaje: 'Movimientos registrados correctamente',
        };
    }




}
