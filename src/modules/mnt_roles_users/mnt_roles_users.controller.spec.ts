import { Test, TestingModule } from '@nestjs/testing';
import { RolesUsersController } from './mnt_roles_users.controller';

describe('RolesUsersController', () => {
  let controller: RolesUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RolesUsersController],
    }).compile();

    controller = module.get<RolesUsersController>(RolesUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
