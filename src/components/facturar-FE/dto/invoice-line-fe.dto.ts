import { TaxTotalFeDto } from "./tax-total-fe.dto";

export class InvoiceLineFeDto {
    unit_measure_id: number;
    invoiced_quantity: string;
    line_extension_amount: string;
    free_of_charge_indicator: boolean;
    tax_totals: TaxTotalFeDto[];
    description: string;
    notes: string;
    code: string;
    type_item_identification_id: number;
    price_amount: string;
    base_quantity: string;
}