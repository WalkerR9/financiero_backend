import { Test, TestingModule } from '@nestjs/testing';
import { CtlRolesService } from './ctl_roles.service';

describe('CtlRolesService', () => {
  let service: CtlRolesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CtlRolesService],
    }).compile();

    service = module.get<CtlRolesService>(CtlRolesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
