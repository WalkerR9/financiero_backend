import { Test, TestingModule } from '@nestjs/testing';
import { CtlRolesController } from './ctl_roles.controller';

describe('CtlRolesController', () => {
  let controller: CtlRolesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CtlRolesController],
    }).compile();

    controller = module.get<CtlRolesController>(CtlRolesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
