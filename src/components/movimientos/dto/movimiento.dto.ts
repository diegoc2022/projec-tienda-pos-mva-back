export class MovimientosDto {
    id: number;
    producto_id: string;
    tipo: string;
    cantidad: number;
    stock_antes: number;
    stock_despues: number;
    motivo: string;
    referencia?: string;
    vendedor: string;
    fecha_registro: Date;
}
