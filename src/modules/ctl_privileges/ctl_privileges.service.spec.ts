import { Test, TestingModule } from '@nestjs/testing';
import { CtlPrivilegesService } from './ctl_privileges.service';

describe('CtlPrivilegesService', () => {
  let service: CtlPrivilegesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CtlPrivilegesService],
    }).compile();

    service = module.get<CtlPrivilegesService>(CtlPrivilegesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
