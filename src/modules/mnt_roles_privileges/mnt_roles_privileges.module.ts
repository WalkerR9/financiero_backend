import { Module } from '@nestjs/common';
import { MntRolesPrivilegesController } from './mnt_roles_privileges.controller';
import { MntRolesPrivilegesService } from './mnt_roles_privileges.service';

@Module({
  controllers: [MntRolesPrivilegesController],
  providers: [MntRolesPrivilegesService]
})
export class MntRolesPrivilegesModule {}
