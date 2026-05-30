import { Injectable } from '@nestjs/common';
import { CreateFacturarFeDto } from './dto/create-facturar-fe.dto';
import { UpdateFacturarFeDto } from './dto/update-facturar-fe.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class FacturarFeService {
  constructor(private readonly httpService: HttpService) { }

  async create(dataDto: CreateFacturarFeDto) {
    const response = await firstValueFrom(
      this.httpService.post(
        'http://108.181.191.228:8081/api/ubl2.1/invoice',
        {

        },
        {
          headers: {
            'Content-Type': 'application/json'
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

  update(id: number, updateFacturarFeDto: UpdateFacturarFeDto) {
    return `This action updates a #${id} facturarFe`;
  }

  remove(id: number) {
    return `This action removes a #${id} facturarFe`;
  }
}
