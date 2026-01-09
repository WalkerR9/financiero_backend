import { Test, TestingModule } from '@nestjs/testing';
import { RolesPrivilegesController } from './mnt_roles_privileges.controller';

describe('RolesPrivilegesController', () => {
  let controller: RolesPrivilegesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RolesPrivilegesController],
    }).compile();

    controller = module.get<RolesPrivilegesController>(RolesPrivilegesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
