import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt'; 

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  findOneByEmail(mail: string): Promise<User | null> {
    return this.usersRepository.findOne({
      where: { email: mail },
      select: ['id', 'email', 'password', 'isActive'],
    });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    
    // 2. Extraemos la contraseña y el resto de los datos
    const { password, ...userData } = createUserDto;
    
    // 3. Generamos el hash (10 es el nivel de seguridad recomendado)
    const salt = parseInt(process.env.STEP || '10', 10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4. Creamos el objeto del usuario mezclando los datos con la contraseña encriptada
    const user = this.usersRepository.create({
      ...userData,
      password: hashedPassword,
    });

    // 5. Guardamos en la base de datos
    return await this.usersRepository.save(user);
  }

  async toggleStatus(id: number, activeStatus: boolean): Promise<void> {
    await this.usersRepository.update(id, { isActive: activeStatus });
  }

}
