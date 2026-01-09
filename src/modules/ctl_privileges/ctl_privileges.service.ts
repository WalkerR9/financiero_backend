import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Privilege } from './entities/ctl_privilege.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PrivilegesService {
    constructor(
        @InjectRepository(Privilege)
        private privilegeRepository: Repository<Privilege>,
      ) {}
    
      findAll(): Promise<Privilege[]> {
        return this.privilegeRepository.find();
      }
    
      findOne(id: number): Promise<Privilege | null> {
        return this.privilegeRepository.findOneBy({ id });
      }
    
      create(privilege: Privilege): Promise<Privilege> {
        return this.privilegeRepository.save(privilege);
      }
    
      async remove(id: number): Promise<void> {
        await this.privilegeRepository.delete(id);
      }
}
