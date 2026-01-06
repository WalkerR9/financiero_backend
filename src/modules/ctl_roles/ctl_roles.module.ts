import { Module } from '@nestjs/common';
import { CtlRolesController } from './ctl_roles.controller';
import { CtlRolesService } from './ctl_roles.service';
import { Ctl_Role } from './entities/ctl_roles.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ctl_Role])],
  controllers: [CtlRolesController],
  providers: [CtlRolesService]
})
export class CtlRolesModule {}
