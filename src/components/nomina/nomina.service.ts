import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { NominaEntity } from './entity/nomina.entity';

@Injectable()
export class NominaService {
  constructor(
    @InjectRepository(NominaEntity)
    private repository: Repository<NominaEntity>,
    private readonly dataSource: DataSource
  ) { }

  async funct_registra_nomina_s(data: any[]): Promise<{ success: boolean; resultados: any[] }> {
    const resultados: any[] = [];
    // Verificar si data es un array antes de iterarlo
    if (!Array.isArray(data)) {
      return {
        success: false,
        resultados: [{
          mensaje: 'Error: data debe ser un array',
          registrado: false
        }]
      };
    }

    // Si el array está vacío, retornar error
    if (data.length === 0) {
      return {
        success: false,
        resultados: [{
          mensaje: 'Error: no hay datos para procesar',
          registrado: false
        }]
      };
    }

    await this.dataSource.transaction(async (manager) => {
      for (const item of data) {
        // Validación más específica
        if (!item.cedula && !item.ced_empleado || typeof item.valor_pago !== 'number' || (!item.concepto && !item.tipo_concepto)) {
          resultados.push({
            cedula: item.cedula || item.ced_empleado,
            valor_pago: item.valor_pago,
            mensaje: 'Datos inválidos - faltan campos requeridos',
            registrado: false,
          });
          continue;
        }

        let fechaDesdeProcesada, fechaHastaProcesada;

        try {
          // Función para procesar fechas de manera segura
          const procesarFecha = (fecha: any): string => {
            if (!fecha || fecha === null || fecha === undefined) {
              const ahora = new Date();
              const año = ahora.getFullYear();
              const mes = String(ahora.getMonth() + 1).padStart(2, '0');
              const dia = String(ahora.getDate()).padStart(2, '0');
              return `${año}-${mes}-${dia} 00:00:00.000`;
            }

            if (typeof fecha === 'string') {
              // Si ya está en formato timestamp, usarlo directamente
              if (fecha.includes(' ') && fecha.includes(':')) {
                return fecha;
              }

              if (fecha.includes('T')) {
                // Formato ISO                 
                const fechaObj = new Date(fecha);
                if (isNaN(fechaObj.getTime())) {
                  ;
                  throw new Error("Fecha ISO inválida");
                }
                const año = fechaObj.getFullYear();
                const mes = String(fechaObj.getMonth() + 1).padStart(2, '0');
                const dia = String(fechaObj.getDate()).padStart(2, '0');
                const resultado = `${año}-${mes}-${dia} 00:00:00.000`;
                return resultado;
              } else if (fecha.includes('-')) {
                const resultado = `${fecha} 00:00:00.000`;
                return resultado;
              } else if (fecha.includes('/')) {
                // Formato dd/MM/yyyy                  
                const partes = fecha.split('/');
                if (partes.length === 3) {
                  const [dia, mes, año] = partes;
                  const resultado = `${año}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')} 00:00:00.000`;
                  return resultado;
                }
              }
            }

            // Si no se puede procesar, usar fecha actual
            console.log("No se pudo procesar fecha:", fecha, "usando fecha actual");
            const ahora = new Date();
            const año = ahora.getFullYear();
            const mes = String(ahora.getMonth() + 1).padStart(2, '0');
            const dia = String(ahora.getDate()).padStart(2, '0');
            const resultado = `${año}-${mes}-${dia} 00:00:00.000`;
            return resultado;
          };

          fechaDesdeProcesada = procesarFecha(item.fecha_desde);
          fechaHastaProcesada = procesarFecha(item.fecha_hasta);

          // Validación final de fechas
          if (fechaDesdeProcesada.includes('NaN') || fechaHastaProcesada.includes('NaN')) {
            throw new Error("Fechas procesadas contienen NaN");
          }

        } catch (error) {
          // Usar fecha actual como fallback
          const ahora = new Date();
          const año = ahora.getFullYear();
          const mes = String(ahora.getMonth() + 1).padStart(2, '0');
          const dia = String(ahora.getDate()).padStart(2, '0');
          const fechaFallback = `${año}-${mes}-${dia} 00:00:00.000`;
          fechaDesdeProcesada = fechaFallback;
          fechaHastaProcesada = fechaFallback;
        }

        const datosParaGuardar = {
          cedula: item.cedula || item.ced_empleado,
          valor_pago: item.valor_pago,
          concepto: item.concepto || item.tipo_concepto,
          fecha_desde: fechaDesdeProcesada,
          fecha_hasta: fechaHastaProcesada,
          num_mes: typeof item.num_mes === 'string' ? parseInt(item.num_mes) : item.num_mes,
          num_year: typeof item.num_year === 'string' ? parseInt(item.num_year) : item.num_year
        };

        try {
          // Intentar guardar usando el repository directamente
          const nominaGuardada = await manager.save(this.repository.target, datosParaGuardar);
          // Verificar que realmente se guardó en la base de datos
          try {
            const registroVerificado = await manager.findOne(this.repository.target, {
              where: { id: nominaGuardada.id }
            });

            if (registroVerificado) {
              console.log("=== VERIFICACIÓN EXITOSA ===");
              console.log("Registro encontrado en BD:", JSON.stringify(registroVerificado, null, 2));
            } else {
              console.log("=== ADVERTENCIA: REGISTRO NO ENCONTRADO EN BD ===");
            }
          } catch (verificacionError) {
            console.error("Error en verificación:", verificacionError);
          }

          resultados.push({
            ...nominaGuardada,
            mensaje: 'Nómina registrada correctamente',
            registrado: true,
          });

          console.log("=== ITEM PROCESADO EXITOSAMENTE ===");
        } catch (error) {
          console.error("=== ERROR AL GUARDAR ===");
          resultados.push({
            cedula: item.cedula || item.ced_empleado,
            valor_pago: item.valor_pago,
            mensaje: `Error al guardar: ${error.message}`,
            registrado: false,
          });
        }
      }
    });
    return { success: true, resultados };
  }

  async funct_retorna_nomina_por_empleado_s(ced: any, num_mes: any, num_year: any): Promise<NominaEntity[]> {
    try {
      const formatearFecha = (fecha: any): string => {
        if (typeof fecha === 'string') {
          try {
            if (fecha.includes('T')) {
              // Si es formato ISO, crear una nueva fecha sin zona horaria
              const fechaObj = new Date(fecha);
              const año = fechaObj.getFullYear();
              const mes = String(fechaObj.getMonth() + 1).padStart(2, '0');
              const dia = String(fechaObj.getDate()).padStart(2, '0');
              return `${año}-${mes}-${dia} 00:00:00.000`;
            } else if (fecha.includes('-')) {
              // Si ya es formato yyyy-MM-dd, agregar la hora
              return `${fecha} 00:00:00.000`;
            } else if (fecha.includes('/')) {
              // Si es formato dd/MM/yyyy, convertir
              const partes = fecha.split('/');
              if (partes.length === 3) {
                const [dia, mes, año] = partes;
                return `${año}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')} 00:00:00.000`;
              }
            }
          } catch (error) {
            // Si hay error, intentar con la fecha actual
            const ahora = new Date();
            const año = ahora.getFullYear();
            const mes = String(ahora.getMonth() + 1).padStart(2, '0');
            const dia = String(ahora.getDate()).padStart(2, '0');
            return `${año}-${mes}-${dia} 00:00:00.000`;
          }
        }
        // Si no se puede procesar, usar la fecha actual
        const ahora = new Date();
        const año = ahora.getFullYear();
        const mes = String(ahora.getMonth() + 1).padStart(2, '0');
        const dia = String(ahora.getDate()).padStart(2, '0');
        return `${año}-${mes}-${dia} 00:00:00.000`;
      };


      // Primero verificar si hay registros con esa cédula
      const registrosCedula = await this.repository.find({
        where: { cedula: ced }
      });

      // Buscar registros donde la fecha_desde esté dentro del rango especificado
      const resultados = await this.repository
        .createQueryBuilder('nomina')
        .where('nomina.cedula = :cedula', { cedula: ced })
        .andWhere('nomina.num_mes >= :num_mes', { num_mes })
        .andWhere('nomina.num_year <= :num_year', { num_year })
        .getMany();

      return resultados;

    } catch (error) {
      console.error("Error en consulta de nómina:", error);
      throw error;
    }
  }

  async funct_retorna_nimina_s(num_mes: number, num_year: number) {
    const resultados = await this.repository.find({
      where: { num_mes: num_mes, num_year: num_year }
    });
    return resultados;
  }
}