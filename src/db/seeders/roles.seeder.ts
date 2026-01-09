import { Role } from '../../modules/ctl_roles/entities/ctl_roles.entity';
import { DataSource } from 'typeorm';

export async function seedRoles(dataSource: DataSource) {
  const repo = dataSource.getRepository(Role);

  const roles = [
    { name: 'ADMIN' },
    { name: 'USER' },
  ];

  for (const role of roles) {
    const exists = await repo.findOneBy({ name: role.name });
    if (!exists) {
      await repo.save(repo.create(role));
    }
  }

  console.log('Roles seeded');
}
