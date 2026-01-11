import * as jwt from 'jsonwebtoken';
export class Token {
    private private_key = '';

    constructor(){
        this.private_key = 'mi_clave_de_seguridad';        
    }

    func_retorna_token(token:any){
        const claims ={
            "sub":token,
            "secre":{expiresIn: '1h'}
        }
        return jwt.sign({token:claims},this.private_key);       
    }

    
    func_valida_token(token){
       
    }
    
}