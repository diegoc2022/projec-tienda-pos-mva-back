
export class CreateInventarioDto {
    id: number
    id_inventario: number;
    codprod: string;
    stock_actual: number;
    stock_despues: number;
    id_tipo: string;
    nombre_tipo: string;
    vendedor: string;
    fecha_registro: Date;
}