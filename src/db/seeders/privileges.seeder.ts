import { Ctl_Privilege } from '../../modules/ctl_privileges/entities/ctl_privilege.entity';
import { DataSource } from 'typeorm';

export async function seedPrivileges(dataSource: DataSource) {
  const repo = dataSource.getRepository(Ctl_Privilege);

  const privileges = [
    { name: 'USER_CREATE', description: 'Crear usuarios' },
    { name: 'USER_EDIT', description: 'Editar usuarios' },
  ];

  for (const p of privileges) {
    const exists = await repo.findOneBy({ name: p.name });
    if (!exists) {
      await repo.save(repo.create(p));
    }
  }

  console.log('Privileges seeded');
}

