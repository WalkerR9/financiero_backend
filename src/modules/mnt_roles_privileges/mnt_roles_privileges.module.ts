import { Module } from '@nestjs/common';
import { MntRolesPrivilegesController } from './mnt_roles_privileges.controller';
import { MntRolesPrivilegesService } from './mnt_roles_privileges.service';
import { Mnt_Roles_Privileges } from './entities/mnt_roles_privileges.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Mnt_Roles_Privileges])],
  controllers: [MntRolesPrivilegesController],
  providers: [MntRolesPrivilegesService]
})
export class MntRolesPrivilegesModule {}
