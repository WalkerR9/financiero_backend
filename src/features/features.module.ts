import { Module } from '@nestjs/common';
import { AuthModule } from 'src/modules/auth/auth.module';
import { CtlPrivilegesModule } from 'src/modules/ctl_privileges/ctl_privileges.module';
import { CtlRolesModule } from 'src/modules/ctl_roles/ctl_roles.module';
import { RolesPrivilegesModule } from 'src/modules/mnt_roles_privileges/mnt_roles_privileges.module';
import { RolesUsersModule } from 'src/modules/mnt_roles_users/mnt_roles_users.module';
import { UsersModule } from 'src/modules/users/users.module';


@Module({
  imports: [
    AuthModule,
    UsersModule,
    CtlRolesModule,
    CtlPrivilegesModule,
    RolesPrivilegesModule,
    RolesUsersModule
  ],
  exports: [
    AuthModule,
    UsersModule,
    CtlRolesModule,
    CtlPrivilegesModule,
    RolesPrivilegesModule,
    RolesUsersModule
  ],
})
export class FeaturesModule {}