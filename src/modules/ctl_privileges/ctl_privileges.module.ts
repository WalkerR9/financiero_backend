import { Module } from '@nestjs/common';
import { PrivilegesController } from './ctl_privileges.controller';
import { PrivilegesService } from './ctl_privileges.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ctl_Privilege } from './entities/ctl_privilege.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Ctl_Privilege])],
  controllers: [PrivilegesController],
  providers: [PrivilegesService]
})
export class CtlPrivilegesModule {}
