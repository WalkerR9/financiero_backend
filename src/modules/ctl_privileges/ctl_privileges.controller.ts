import { Controller, Get } from '@nestjs/common';
import { Ctl_Privilege } from './entities/ctl_privilege.entity';
import { PrivilegesService } from './ctl_privileges.service';

@Controller('privileges')
export class PrivilegesController {
    constructor(private readonly privilegeService: PrivilegesService) {}
    
    @Get()
    findAll(): Promise<Ctl_Privilege[]> {
    return this.privilegeService.findAll();
    }
}
