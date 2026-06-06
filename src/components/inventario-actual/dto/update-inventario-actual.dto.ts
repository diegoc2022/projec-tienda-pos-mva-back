
export class UpdateInventarioActualDto {
    codProd: string
    stock_actual: number;
    stock_despues: number;
    motivo: string;
    vendedor: string;
    fecha_inventario: Date;
}
