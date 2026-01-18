import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsuarioEntity } from './entity/usuario.entity';
import { AutLoginDto } from './dto/autLogin.dto';
import { CreateLoginDto } from './dto/createLogin.dto';
import { MenuEntity } from '../menu/entity/menu.entity';

@Injectable()
export class LoginService {

  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly userRepository: Repository<UsuarioEntity>,

    @InjectRepository(MenuEntity)
    private readonly menuRepository: Repository<MenuEntity>,
    private readonly jwtService: JwtService
  ) { }

  // 🔐 LOGIN
  async funct_valida_usuario_s(authDto: AutLoginDto) {
    // 1️⃣ Buscar usuario
    const user = await this.userRepository.findOne({
      where: { user: authDto.user }
    });

    if (!user) return null;

    // 2️⃣ Validar contraseña
    const isValidPassword = await bcrypt.compare(
      authDto.clave,
      user.clave
    );

    if (!isValidPassword) return null;

    // 3️⃣ Payload JWT
    const payload = {
      sub: user.id_user,
      rol: user.id_rol
    };

    // 4️⃣ Obtener menú por rol
    const menu = await this.menuRepository
      .createQueryBuilder('menu')
      .innerJoin('menu.rolMenus', 'rm')
      .where('rm.id_rol = :rol', { rol: user.id_rol })
      .andWhere('menu.activo = true')
      .orderBy('menu.orden', 'ASC')
      .getMany();

    // 5️⃣ Respuesta final
    return {
      token: this.jwtService.sign(payload),
      user: {
        id_user: user.id_user,
        id_rol: user.id_rol
      },
      menu
    };
  }

  async funValidaUsuario(autLoginDto: AutLoginDto) {
    const user = await this.userRepository.findOne({
      where: {
        user: autLoginDto.user,
        clave: autLoginDto.clave
      }
    })

    if (!user) {
      return { status: 401, message: 'Credenciales incorrectas' };
    }
    //const toke = this.jwt.func_retorna_token(user);
    return { status: 200, result: user };
  }


  // 👤 CREAR USUARIO (opcional)
  async funct_crea_usuario_s(createLoginDto: CreateLoginDto) {
    const { user, clave } = createLoginDto;
    const result = await this.userRepository
      .createQueryBuilder('user')
      .where("user.user = :user", { user: user })
      .andWhere("user.clave = :clave", { clave: clave })
      .getOne()
  }
}




