export class MovimientosDto {
    id: number;
    codProd: string;
    cantidad: number;
    stock_antes: number;
    stock_despues: number;
    tipo: string;
    motivo: string;
    referencia: string;
    vendedor: string;
    fecha_registro: Date;
}
