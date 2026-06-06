
export class CreateInventarioActualDto {
    codProd: string;
    descripcion: string;
    stock_actual: number;
    stock_despues: number;
    motivo: string;
    vendedor: string;
    fecha_inventario: Date;
}
