import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { VentasProductosService } from '../ventas-temp/ventas_productos.service';

@Injectable()
export class FacturarFeService {
  constructor(
    private readonly httpService: HttpService,
    private ventas_tem: VentasProductosService
  ) { }

  async funct_generate_factura_fe_s(id: any) {

    const ventas = await this.ventas_tem.funt_retorna_ventas_facturas(id);

    if (!ventas) {
      return
    }

    /* const response = await firstValueFrom(
      this.httpService.post('http://108.181.191.228:8081/api/ubl2.1/invoice', body,
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "host": "apidian2026-8.oo",
            "Authorization": `Bearer ${process.env.API_TOKEN}`
          }
        }
      )
    ); */
    return ventas;
  }

  findAll() {
    return `This action returns all facturarFe`;
  }

  findOne(id: number) {
    return `This action returns a #${id} facturarFe`;
  }

  update(id: number, data: any) {
    return `This action updates a #${id} facturarFe`;
  }

  remove(id: number) {
    return `This action removes a #${id} facturarFe`;
  }
}
