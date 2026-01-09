import { Controller, Get } from '@nestjs/common';
import { Privilege } from './entities/ctl_privilege.entity';
import { PrivilegesService } from './ctl_privileges.service';

@Controller('privileges')
export class PrivilegesController {
    constructor(private readonly privilegeService: PrivilegesService) {}
    
    @Get()
    findAll(): Promise<Privilege[]> {
    return this.privilegeService.findAll();
    }
}
