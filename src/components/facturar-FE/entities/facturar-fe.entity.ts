import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

export class FacturarFe {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    number: number;

    @Column()
    type_document_id: number;

    @Column({ type: 'date' })
    date: string;

    @Column()
    time: string;

    @Column()
    resolution_number: string;

    @Column()
    prefix: string;

    @Column()
    actividadeconomica: string;

    @Column({ type: 'text', nullable: true })
    notes: string;

    @Column({ default: false })
    disable_confirmation_text: boolean;

    @Column()
    establishment_name: string;

    @Column()
    establishment_address: string;

    @Column()
    establishment_phone: string;

    @Column()
    establishment_municipality: number;

    @Column()
    establishment_email: string;

    @Column({ default: false })
    sendmail: boolean;

    @Column({ default: false })
    sendmailtome: boolean;

    @Column({ default: false })
    send_customer_credentials: boolean;

    @Column()
    seze: string;

    @Column({
        type: 'json',
        nullable: true,
    })
    email_cc_list: any[];

    @Column({
        type: 'json',
    })
    customer: any;

    @Column({
        type: 'json',
    })
    payment_form: any[];

    @Column({
        type: 'json',
    })
    legal_monetary_totals: any;

    @Column({
        type: 'json',
    })
    tax_totals: any[];

    @Column({
        type: 'json',
    })
    invoice_lines: any[];

    @Column()
    fecha_registro: Date;

}
