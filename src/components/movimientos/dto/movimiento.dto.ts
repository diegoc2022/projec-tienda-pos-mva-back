export class MovimientosDto {
    id: number;
    codProd: string;
    tipo: string;
    cantidad: number;
    stock_antes: number;
    stock_despues: number;
    motivo: string;
    referencia?: string;
    vendedor: string;
    fecha_registro: Date;
}
