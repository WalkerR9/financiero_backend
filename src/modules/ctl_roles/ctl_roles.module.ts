import { Module } from '@nestjs/common';
import { RolesController } from './ctl_roles.controller';
import { RolesService } from './ctl_roles.service';
import { Role } from './entities/ctl_roles.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  controllers: [RolesController],
  providers: [RolesService]
})
export class CtlRolesModule {}
