import { PartialType } from '@nestjs/mapped-types';
import { CreateFacturarFeDto } from './create-facturar-fe.dto';

export class UpdateFacturarFeDto extends PartialType(CreateFacturarFeDto) {}
