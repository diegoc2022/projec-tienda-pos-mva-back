import { IsArray, IsBoolean, IsEmail, IsNumber, IsObject, IsString } from 'class-validator';

export class CustomerFeDto {
    identification_number: string;
    dv: number;
    name: string;
    phone: string;
    address: string;
    email: string;
    merchant_registration: string;
    type_document_identification_id: number;
    type_organization_id: number;
    type_liability_id: number;
    municipality_id: number;
    type_regime_id: number;
    fecha_registro: Date
}
