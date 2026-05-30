import { Injectable } from '@nestjs/common';
import { MovimientosEntity } from './entity/movimientos.entity';
import { Repository, DataSource } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { VentaProductoEntity } from '../venta-producto/entity/create_venta_producto.entity';
import { format } from 'date-fns';
import { InventarioGateway } from 'src/socketIO/gateway';

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
        private dataSource: DataSource,

        private inventarioGateway: InventarioGateway
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
                        updated_at: fecha,
                        activo: true
                    }
                );

                this.inventarioGateway.emitirCambio({
                    codProd: item.codProd,
                    existencia: stockDespues,
                    updated_at: fecha
                });

                await manager.insert(this.movimientos.target, {
                    codProd: item.codProd,
                    tipo: 'Salida',
                    cantidad: item.cantidad,
                    stock_antes: stockAntes,
                    stock_despues: stockDespues,
                    motivo: 'Venta',
                    referencia: 'Fac: ' + item.factura,
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


    async funct_registra_movimientos_s(data: any[]) {
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



        await this.dataSource.transaction(async (manager) => {

            const stockDespues = data[0].existencia;

            await manager.update(
                this.ventaProducto.target,
                { codProd: data[0].codProd },
                {
                    existencia: data[0].ajuste,
                    updated_at: fecha,
                    activo: true
                }
            );

            await manager.insert(this.movimientos.target, {
                codProd: data[0].codProd,
                tipo: data[0].tipo,
                cantidad: data[0].ajuste,
                stock_antes: data[0].existencia,
                stock_despues: data[0].ajuste,
                motivo: data[0].motivo,
                referencia: 'Inventario',
                vendedor: 'User-bodega',
                fecha_registro: fecha,
            });

        });

        return {
            ok: true,
            mensaje: 'Movimientos registrados correctamente',
        };
    }




}
