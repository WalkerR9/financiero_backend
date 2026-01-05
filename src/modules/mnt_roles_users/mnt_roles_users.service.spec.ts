import { Test, TestingModule } from '@nestjs/testing';
import { MntRolesUsersService } from './mnt_roles_users.service';

describe('MntRolesUsersService', () => {
  let service: MntRolesUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MntRolesUsersService],
    }).compile();

    service = module.get<MntRolesUsersService>(MntRolesUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
