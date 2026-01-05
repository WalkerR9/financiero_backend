import { Test, TestingModule } from '@nestjs/testing';
import { CtlPrivilegesController } from './ctl_privileges.controller';

describe('CtlPrivilegesController', () => {
  let controller: CtlPrivilegesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CtlPrivilegesController],
    }).compile();

    controller = module.get<CtlPrivilegesController>(CtlPrivilegesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
