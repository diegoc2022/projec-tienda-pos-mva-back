import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AutLoginDto } from './dto/autLogin.dto';
import { LoginService } from './usuario.service';
import * as bcrypt from 'bcrypt';


@Controller('auth')
export class LoginController {

  constructor(
    private readonly authService: LoginService,
    private loginService: LoginService
  ) { }

  @Post('login')
  async loginData(@Body() loginDto: AutLoginDto) {
    const result = await this.authService.funct_valida_usuario_s(loginDto);

    if (!result) {
      throw new UnauthorizedException('Creadenciales inválids');
    }
    return result;
  }


  @Post('user')
  async funct_valida_usuario_c(@Body() loginDto: any) {
    return await this.loginService.funct_valida_usuario_s(loginDto);
  }

  @Post('hash')
  async generarHash(@Body('clave') clave: string) {
    const hash = await bcrypt.hash(clave, 10);
    return { hash };
  }

}
