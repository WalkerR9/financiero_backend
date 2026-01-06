import { Module } from '@nestjs/common';
import { CtlPrivilegesModule } from 'src/modules/ctl_privileges/ctl_privileges.module';
import { CtlRolesModule } from 'src/modules/ctl_roles/ctl_roles.module';
import { MntRolesPrivilegesModule } from 'src/modules/mnt_roles_privileges/mnt_roles_privileges.module';
import { MntRolesUsersModule } from 'src/modules/mnt_roles_users/mnt_roles_users.module';
import { UsersModule } from 'src/modules/users/users.module';


@Module({
  imports: [
    UsersModule,
    CtlRolesModule,
    CtlPrivilegesModule,
    MntRolesPrivilegesModule,
    MntRolesUsersModule
  ],
  exports: [
    UsersModule,
    CtlRolesModule,
    CtlPrivilegesModule,
    MntRolesPrivilegesModule,
    MntRolesUsersModule
  ],
})
export class FeaturesModule {}