import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'TU_SEMILLA_SECRETA',
    });
  }

  async validate(payload: any) {
    // Lo que retornes aquí se inyectará en el objeto 'req.user'
    return { userId: payload.sub, email: payload.email };
  }
}