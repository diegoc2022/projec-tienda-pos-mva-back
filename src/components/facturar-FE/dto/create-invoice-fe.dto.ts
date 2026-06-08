import { CustomerFeDto } from "./customer-fe.dto";
import { InvoiceLineFeDto } from "./invoice-line-fe.dto";
import { PaymentFormFeDto } from "./payment-form-fe.dto";
import { TaxTotalFeDto } from "./tax-total-fe.dto";


export class CreateInvoiceDto {
    number: number;
    type_document_id: number;
    date: string;
    time: string;
    resolution_number: string;
    prefix: string;
    customer: CustomerFeDto;
    payment_form: PaymentFormFeDto[];
    tax_totals: TaxTotalFeDto[];
    invoice_lines: InvoiceLineFeDto[];
    legal_monetary_totals: {
        line_extension_amount: string;
        tax_exclusive_amount: string;
        tax_inclusive_amount: string;
        payable_amount: string;
    };
}