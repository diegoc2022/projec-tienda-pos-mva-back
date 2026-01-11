import { formatearFechaISO, formatearFechaDDMMYYYY, extraerSoloFecha, formatearFechaSQL } from './date-formatter';

/**
 * Ejemplos de uso de las funciones de formateo de fecha
 */

// Ejemplo 1: Fecha que viene del calendario en formato ISO
const fechaCalendario = '2025-06-25T05:00:00.000Z';

// Formatear a dd/MM/yyyy
const fechaFormateada = formatearFechaDDMMYYYY(fechaCalendario);
console.log(fechaFormateada); // Output: 25/06/2025

// Formatear a yyyy-MM-dd (formato SQL)
const fechaSQL = extraerSoloFecha(fechaCalendario);
console.log(fechaSQL); // Output: 2025-06-25

// Formatear con formato personalizado
const fechaPersonalizada = formatearFechaISO(fechaCalendario, 'dd-MM-yyyy');
console.log(fechaPersonalizada); // Output: 25-06-2025

// Ejemplo 2: Uso en un servicio
export function procesarFechaCalendario(fechaISO: string) {
  // Si necesitas solo la fecha sin hora para la base de datos
  const fechaParaDB = extraerSoloFecha(fechaISO);
  
  // Si necesitas la fecha formateada para mostrar al usuario
  const fechaParaUsuario = formatearFechaDDMMYYYY(fechaISO);
  
  return {
    fechaDB: fechaParaDB,
    fechaUsuario: fechaParaUsuario
  };
}

// Ejemplo 3: Validación y formateo
export function validarYFormatearFecha(fechaISO: string) {
  try {
    if (!fechaISO) {
      throw new Error('Fecha no proporcionada');
    }
    
    // Formatear la fecha
    const fechaFormateada = formatearFechaDDMMYYYY(fechaISO);
    
    return {
      success: true,
      fechaFormateada,
      fechaOriginal: fechaISO
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      fechaOriginal: fechaISO
    };
  }
} 