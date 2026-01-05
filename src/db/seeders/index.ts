import  dataSource from '../datasource';
import { seedRoles } from './roles.seeder';
import { seedPrivileges } from './privileges.seeder';
import { seedRolesPrivileges } from './roles-privileges.seeder';

async function runSeeders() {
  await dataSource.initialize();

  await seedRoles(dataSource);
  await seedPrivileges(dataSource);
  await seedRolesPrivileges(dataSource);

  await dataSource.destroy();
}

runSeeders()
  .then(() => {
    console.log('🌱 Seeding completed');
    process.exit(0);
  })
  .catch((err) => {
    console.error('❌ Seeding failed', err);
    process.exit(1);
  });
