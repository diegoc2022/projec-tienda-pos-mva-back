import { format, parseISO } from 'date-fns';

/**
 * Formatea una fecha ISO a formato día/mes/año
 * @param fechaISO - Fecha en formato ISO (ej: 2025-06-25T05:00:00.000Z)
 * @param formato - Formato deseado (por defecto: 'dd/MM/yyyy')
 * @returns Fecha formateada como string
 */
export function formatearFechaISO(fechaISO: string, formato: string = 'dd/MM/yyyy'): string {
  try {
    // Parsear la fecha ISO a objeto Date
    const fecha = parseISO(fechaISO);
    // Formatear la fecha según el formato especificado
    return format(fecha, formato);
  } catch (error) {
    console.error('Error al formatear fecha:', error);
    return fechaISO; // Retornar la fecha original si hay error
  }
}

/**
 * Formatea una fecha ISO a formato yyyy-MM-dd (formato SQL)
 * @param fechaISO - Fecha en formato ISO
 * @returns Fecha en formato yyyy-MM-dd
 */
export function formatearFechaSQL(fechaISO: string): string {
  return formatearFechaISO(fechaISO, 'yyyy-MM-dd');
}

/**
 * Formatea una fecha ISO a formato dd/MM/yyyy
 * @param fechaISO - Fecha en formato ISO
 * @returns Fecha en formato dd/MM/yyyy
 */
export function formatearFechaDDMMYYYY(fechaISO: string): string {
  return formatearFechaISO(fechaISO, 'dd/MM/yyyy');
}

/**
 * Formatea una fecha ISO a formato MM/dd/yyyy
 * @param fechaISO - Fecha en formato ISO
 * @returns Fecha en formato MM/dd/yyyy
 */
export function formatearFechaMMDDYYYY(fechaISO: string): string {
  return formatearFechaISO(fechaISO, 'MM/dd/yyyy');
}

/**
 * Extrae solo la fecha (sin hora) de una fecha ISO
 * @param fechaISO - Fecha en formato ISO
 * @returns Fecha en formato yyyy-MM-dd
 */
export function extraerSoloFecha(fechaISO: string): string {
  return formatearFechaISO(fechaISO, 'yyyy-MM-dd');
} 