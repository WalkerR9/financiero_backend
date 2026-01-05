import { Test, TestingModule } from '@nestjs/testing';
import { MntRolesPrivilegesService } from './mnt_roles_privileges.service';

describe('MntRolesPrivilegesService', () => {
  let service: MntRolesPrivilegesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MntRolesPrivilegesService],
    }).compile();

    service = module.get<MntRolesPrivilegesService>(MntRolesPrivilegesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
