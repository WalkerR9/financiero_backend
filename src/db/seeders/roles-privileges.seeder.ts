import { DataSource } from 'typeorm';
import { Privilege } from '../../modules/ctl_privileges/entities/ctl_privilege.entity';
import { RolesPrivileges } from '../../modules/mnt_roles_privileges/entities/mnt_roles_privileges.entity';
import { Role } from '../../modules/ctl_roles/entities/ctl_roles.entity';

export async function seedRolesPrivileges(dataSource: DataSource) {
  const roleRepo = dataSource.getRepository(Role);
  const privRepo = dataSource.getRepository(Privilege);
  const rpRepo = dataSource.getRepository(RolesPrivileges);

  const admin = await roleRepo.findOneBy({ name : 'ADMIN' });
  if (!admin) return;

  const privileges = await privRepo.find();

  for (const privilege of privileges) {
    const exists = await rpRepo.findOne({
      where: {
        role: { id: admin.id },
        privilege: { id: privilege.id },
      },
    });

    if (!exists) {
      const rp = rpRepo.create({
        role: admin,
        privilege,
      });
      await rpRepo.save(rp);
    }
  }

  console.log('seeded');
}

