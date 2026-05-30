import { IsArray, IsBoolean, IsEmail, IsNumber, IsObject, IsString } from 'class-validator';

export class CreateFacturarFeDto {
    @IsNumber()
    number: number;

    @IsNumber()
    type_document_id: number;

    @IsString()
    date: string;

    @IsString()
    time: string;

    @IsString()
    resolution_number: string;

    @IsString()
    prefix: string;

    @IsString()
    actividadeconomica: string;

    @IsString()
    notes: string;

    @IsBoolean()
    disable_confirmation_text: boolean;

    @IsString()
    establishment_name: string;

    @IsString()
    establishment_address: string;

    @IsString()
    establishment_phone: string;

    @IsNumber()
    establishment_municipality: number;

    @IsEmail()
    establishment_email: string;

    @IsBoolean()
    sendmail: boolean;

    @IsBoolean()
    sendmailtome: boolean;

    @IsBoolean()
    send_customer_credentials: boolean;

    @IsString()
    seze: string;

    @IsArray()
    email_cc_list: any[];

    @IsObject()
    customer: any;

    @IsArray()
    payment_form: any[];

    @IsObject()
    legal_monetary_totals: any;

    @IsArray()
    tax_totals: any[];

    @IsArray()
    invoice_lines: any[];

    @IsString()
    fecha_registro: Date

}
