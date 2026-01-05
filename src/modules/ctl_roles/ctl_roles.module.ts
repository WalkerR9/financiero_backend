import { Module } from '@nestjs/common';
import { CtlRolesController } from './ctl_roles.controller';
import { CtlRolesService } from './ctl_roles.service';

@Module({
  controllers: [CtlRolesController],
  providers: [CtlRolesService]
})
export class CtlRolesModule {}
