import { GastosModule } from './components/gastos-operativos/gastos.module';
import { PagosModule } from './components/pagos/pagos.module';
import { ComprasHistoricoModule } from './components/compras-historico/compras-historico.module';
import { VentasHistoricoModule } from './components/ventas-historico/ventashistorico.module';
import { ComprasFacturasModule } from './components/compras-facturas/compras-facturas.module';
import { ComprasModule } from './components/compras/compras.module';
import { AjustesVariosModule } from './components/ajustes-varios/ajustes-varios.module';
import { CajaModule } from './components/apertura-caja/caja.module';
import { IdSecuenciaModule } from './components/secuencia-factura/id-secuencia.module';
import { VinculosModule } from './components/viculos/vinculos.module';
import { CloseVentasModule } from './components/close-ventas/close-ventas.module';
import { EncabezadoModule } from './components/encabezado-fact/encabezado.module';
import { VentasProductosModule } from './components/ventas-temp/ventas_productos.module';
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
import { AperturaInventarioModule } from './components/apertura-inventario/apertura-inventario.module';
import { InventarioActualModule } from './components/inventario-actual/inventario-actual.module';
import { InventarioModule } from './components/inventario/inventario.module';
dotenv.config(); // carga el archivo .env

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
      synchronize: false,
      logging: false,
    }),
    VentasHistoricoModule,
    ComprasFacturasModule,
    ComprasModule,
    AjustesVariosModule,
    CajaModule,
    VinculosModule,
    CloseVentasModule,
    EncabezadoModule,
    EmpleadosModule,
    ProductosModule,
    ProveedoresModule,
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
    AperturaInventarioModule,
    InventarioActualModule,
    InventarioModule,
    GastosModule,
    PagosModule,
    ComprasHistoricoModule
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
