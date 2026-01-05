import { Module } from '@nestjs/common';
import { CtlPrivilegesController } from './ctl_privileges.controller';
import { CtlPrivilegesService } from './ctl_privileges.service';

@Module({
  controllers: [CtlPrivilegesController],
  providers: [CtlPrivilegesService]
})
export class CtlPrivilegesModule {}
