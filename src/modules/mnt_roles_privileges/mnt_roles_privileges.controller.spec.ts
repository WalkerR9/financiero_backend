import { Test, TestingModule } from '@nestjs/testing';
import { MntRolesPrivilegesController } from './mnt_roles_privileges.controller';

describe('MntRolesPrivilegesController', () => {
  let controller: MntRolesPrivilegesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MntRolesPrivilegesController],
    }).compile();

    controller = module.get<MntRolesPrivilegesController>(MntRolesPrivilegesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
