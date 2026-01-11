export class PagosDto{
    id:number;
    cedula:string;
    codigo_venta:number;
    monto_total:number;
    otros_pagos_realizados:number;
    ultimo_pago_realizado:number;
    tipo_pago:string;
    total_pagos_realizados:number;
    saldo_restante:number;
    estado_id_venta:string;    
    fecha_registro:Date
}