
export class CreateInventarioActualDto {
    codprod: string;
    descripcion: string;
    stock_actual: number;
    stock_despues: number;
    id_tipo: string;
    nombre_tipo: string;
    vendedor: string;
    created_at: Date;
    updated_at: Date;
}
