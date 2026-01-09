// auth/auth.controller.ts
import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK) // Por defecto POST devuelve 201, pero login suele ser 200
  async login(@Body() loginDto: LoginDto) {
    // 1. Validamos al usuario (email y password)
    const user = await this.authService.validateUser(
      loginDto.email,
      loginDto.password,
    );

    // 2. Si las credenciales no son válidas, lanzamos error 401
    if (!user) {
      throw new UnauthorizedException('Correo o contraseña incorrectos');
    }

    // 3. Si el usuario existe pero está desactivado (isActive: false)
    if (!user.isActive) {
      throw new UnauthorizedException('Esta cuenta está desactivada');
    }

    // 4. Generamos y devolvemos el JWT
    return this.authService.login(user);
  }
  @Post('refresh')
  async refresh(@Body('token') token: string) {
    if (!token) {
      throw new UnauthorizedException('Token requerido');
    }
    return this.authService.refresh(token);
  }
}
