import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateComprasFacturasEntity } from './entity/createComprasFacturas.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ComprasFacturasService {
constructor(
    @InjectRepository(CreateComprasFacturasEntity)
    private comprasFacturas:Repository<CreateComprasFacturasEntity>
){}

async  functRetornaComprasFacturas(id:any){       
    return await this.comprasFacturas.count({
        where: { factura:id.toUpperCase() } 
    });        
}

functCreateComprasFacturas(num:any){
    return this.comprasFacturas.save(num);
}

async funct_elimina_compra_facturas_s(data:any):Promise<any>{
    const result = await this.comprasFacturas.findOne({
        where:{
            factura:data.toUpperCase()
        }
    })

    if (!result) {
        return{
            status:404,
            msg:'La factura que intenta eliminar no existe'
        }            
    } else {
        return await this.comprasFacturas.delete({factura:result.factura});
    }
}

}

