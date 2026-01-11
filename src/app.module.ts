import { GastosModule } from './components/gastos/gastos.module';
import { PagosModule } from './components/pagos/pagos.module';
import { ComprasHistoricoModule } from './components/compras-historico/compras-historico.module';
import { VentasHistoricoModule } from './components/ventas-historico/ventashistorico.module';
import { ComprasFacturasModule } from './components/compras-facturas/compras-facturas.module';
import { ComprasModule } from './components/compras/compras.module';
import { DenominacionModule } from './components/denominacion/denominacion.module';
import { EditaPreciosModule } from './components/edita-precios/edita-precios.module';
import { CajaModule } from './components/caja/caja.module';
import { IdSecuenciaModule } from './components/secuencia/id-secuencia.module';
import { VinculosModule } from './components/viculos/vinculos.module';
import { CloseVentasModule } from './components/close-ventas/close-ventas.module';
import { EncabezadoModule } from './components/encabezado/encabezado.module';
import { VentasProductosModule } from './components/ventas/ventas_productos.module';
import { InventarioModule } from './components/inventario/inventario.module';
import { ProveedoresModule } from './components/proveedores/proveedores.module';
import { EmpleadosModule } from './components/empleados/empleados.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { ProductosModule } from './components/productos/productos.module';
import { PrecioVentasModule } from './components/venta-producto/venta-producto.module';
import { ClientesModule } from './components/clientes/clientes.module';
import { VentasXCobrarModule } from './components/ventas-x-cobrar/ventas-x-cobrar.module';
import { NominaModule } from './components/nomina/nomina.module';
import { MenuModule } from './components/menu/menu.module';
import { LoginModule } from './components/usuarios/usuario.module';
import { MovimientosModule } from './components/movimientos/movimientos.module';
dotenv.config();


@Module({
  imports: [
    GastosModule,
    PagosModule,
    ComprasHistoricoModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'dacs448@230972',
      database: 'tiendapos_vm',
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
      synchronize: true,
    }),
    VentasHistoricoModule,
    ComprasFacturasModule,
    ComprasModule,
    DenominacionModule,
    EditaPreciosModule,
    CajaModule,
    VinculosModule,
    CloseVentasModule,
    EncabezadoModule,
    EmpleadosModule,
    ProductosModule,
    ProveedoresModule,
    InventarioModule,
    VentasProductosModule,
    ComprasModule,
    EncabezadoModule,
    VinculosModule,
    IdSecuenciaModule,
    PrecioVentasModule,
    ClientesModule,
    VentasXCobrarModule,
    PagosModule,
    EmpleadosModule,
    NominaModule,
    MenuModule,
    LoginModule,
    MovimientosModule,


  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {
  constructor(private dataSouce: DataSource) { }
}
