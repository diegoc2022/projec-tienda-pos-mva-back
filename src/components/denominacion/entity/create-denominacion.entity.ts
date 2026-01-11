import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'tbl_denominacion'})
export class CreateDenominacionEntity{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    denominacion:number;

    @Column()
    cantidad:number;

    @Column({type:'timestamp',default:()=>'CURRENT_TIMESTAMP'})
    createAt:Date;   
    
}