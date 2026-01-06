import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ctl_Privilege } from './entities/ctl_privilege.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PrivilegesService {
    constructor(
        @InjectRepository(Ctl_Privilege)
        private privilegeRepository: Repository<Ctl_Privilege>,
      ) {}
    
      findAll(): Promise<Ctl_Privilege[]> {
        return this.privilegeRepository.find();
      }
    
      findOne(id: number): Promise<Ctl_Privilege | null> {
        return this.privilegeRepository.findOneBy({ id });
      }
    
      create(privilege: Ctl_Privilege): Promise<Ctl_Privilege> {
        return this.privilegeRepository.save(privilege);
      }
    
      async remove(id: number): Promise<void> {
        await this.privilegeRepository.delete(id);
      }
}
