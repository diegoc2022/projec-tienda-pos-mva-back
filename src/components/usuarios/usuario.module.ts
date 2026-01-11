import { Module } from '@nestjs/common';
import { LoginService } from './usuario.service';
import { LoginController } from './usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './entity/usuario.entity';
import { JwtModule } from '@nestjs/jwt';
import { RolMenuEntity } from '../menu/entity/rol-menu.entity';
import { MenuEntity } from '../menu/entity/menu.entity';



@Module({
    imports: [
        TypeOrmModule.forFeature([UsuarioEntity, RolMenuEntity, MenuEntity]),
        JwtModule.register({
            secret: 'CLAVE_SUPER_SECRETA',
            signOptions: { expiresIn: '12h' }
        }),
    ],
    controllers: [LoginController],
    providers: [LoginService]
})
export class LoginModule {

}
