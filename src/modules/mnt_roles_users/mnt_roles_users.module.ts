import { Module } from '@nestjs/common';
import { MntRolesUsersController } from './mnt_roles_users.controller';
import { MntRolesUsersService } from './mnt_roles_users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mnt_Roles_Users } from './entities/mnt_roles_users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mnt_Roles_Users])],
  controllers: [MntRolesUsersController],
  providers: [MntRolesUsersService]
})
export class MntRolesUsersModule {}
