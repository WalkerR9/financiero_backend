import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '../users/entities/user.entity';
import { RefreshToken } from './entities/refresh-token.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    @InjectRepository(RefreshToken)
    private tokenRepository: Repository<RefreshToken>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async validateUser(email: string, pass: string): Promise<User | null> {
    const user = await this.usersService.findOneByEmail(email); // Implementa este método
    if (user && user.password && (await bcrypt.compare(pass, user.password))) {
      const { ...result } = user;
      return result;
    }
    return null;
  }
  async login(user: User) {
    const payload = { email: user.email, sub: user.id };
    // 1. Generamos el Access Token (el que enviamos al cliente)
    const accessToken = this.jwtService.sign(payload);

    // 2. Definimos cuánto tiempo durará el token en la DB (ej: 7 días)
    const expiration = 0.16;
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + expiration);

    const refreshTokenEntry = this.tokenRepository.create({
      token: accessToken, // Guardamos el token generado
      user: user, // Relacionamos con el objeto usuario
      expiresAt: expiresAt,
      isRevoked: false,
    });

    await this.tokenRepository.save(refreshTokenEntry);

    // 5. Retornamos la respuesta al cliente
    return {
      access_token: accessToken,
    };
  }

  async refresh(oldToken: string) {
  // 1. Buscamos el token en la base de datos junto con el usuario
  const tokenRecord = await this.tokenRepository.findOne({
    where: { token: oldToken, isRevoked: false },
    relations: ['user'], // Cargamos la relación para saber de quién es
  });

  // 2. Validaciones
  if (!tokenRecord) {
    throw new UnauthorizedException('Token no encontrado o revocado');
  }

  if (new Date() > tokenRecord.expiresAt) {
    throw new UnauthorizedException('El token ha expirado');
  }

  // 3. Si todo está bien, generamos un nuevo Access Token
  const user = tokenRecord.user;
  const payload = { email: user.email, sub: user.id };
  const newAccessToken = this.jwtService.sign(payload);

  // 4. (Opcional) Rotación de tokens: Revocamos el viejo y guardamos el nuevo
  tokenRecord.isRevoked = true;
  await this.tokenRepository.save(tokenRecord);

  // Creamos el nuevo registro para el nuevo token
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 0.16);

  const newTokenEntry = this.tokenRepository.create({
    token: newAccessToken,
    user: user,
    expiresAt: expiresAt,
  });
  await this.tokenRepository.save(newTokenEntry);

  return {
    access_token: newAccessToken,
  };
}
}
