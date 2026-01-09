import { Module } from '@nestjs/common';
import { RolesPrivilegesController } from './mnt_roles_privileges.controller';
import { RolesPrivilegesService } from './mnt_roles_privileges.service';
import { RolesPrivileges } from './entities/mnt_roles_privileges.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RolesPrivileges])],
  controllers: [RolesPrivilegesController],
  providers: [RolesPrivilegesService]
})
export class RolesPrivilegesModule {}
