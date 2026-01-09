import { Module } from '@nestjs/common';
import { RolesUsersController } from './mnt_roles_users.controller';
import { RolesUsersService } from './mnt_roles_users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesUsers } from './entities/mnt_roles_users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RolesUsers])],
  controllers: [RolesUsersController],
  providers: [RolesUsersService]
})
export class RolesUsersModule {}
