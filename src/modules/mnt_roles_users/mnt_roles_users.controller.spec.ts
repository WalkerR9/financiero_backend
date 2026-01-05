import { Test, TestingModule } from '@nestjs/testing';
import { MntRolesUsersController } from './mnt_roles_users.controller';

describe('MntRolesUsersController', () => {
  let controller: MntRolesUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MntRolesUsersController],
    }).compile();

    controller = module.get<MntRolesUsersController>(MntRolesUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
