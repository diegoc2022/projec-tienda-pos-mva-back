import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class FacturarFeService {
  constructor(private readonly httpService: HttpService) { }

  async funct_generate_factura_fe_s(body: any) {
    const response = await firstValueFrom(
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
    );
    return response.data;
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
