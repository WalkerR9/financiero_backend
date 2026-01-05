import { Module } from '@nestjs/common';
import { MntRolesUsersController } from './mnt_roles_users.controller';
import { MntRolesUsersService } from './mnt_roles_users.service';

@Module({
  controllers: [MntRolesUsersController],
  providers: [MntRolesUsersService]
})
export class MntRolesUsersModule {}
