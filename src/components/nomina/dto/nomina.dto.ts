export class NominaDto{  
    id?:number;  
    cedula?:string;  
    ced_empleado?:string; // Campo que llega del frontend
    valor_pago:number;   
    concepto?:string;  
    tipo_concepto?:string; // Campo que llega del frontend
    fecha_desde:string;   
    fecha_hasta:string;  
    num_mes:number | string;   
    num_year:number | string;
}