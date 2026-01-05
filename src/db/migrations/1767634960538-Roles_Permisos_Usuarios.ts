import { MigrationInterface, QueryRunner } from "typeorm";

export class RolesPermisosUsuarios1767634960538 implements MigrationInterface {
    name = 'RolesPermisosUsuarios1767634960538'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`mnt_roles_privileges\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`ctl_role\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(100) NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`ctl_privilege\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(100) NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`middleName\` \`middleName\` varchar(50) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`secondLastName\` \`secondLastName\` varchar(50) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`secondLastName\` \`secondLastName\` varchar(50) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`middleName\` \`middleName\` varchar(50) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`DROP TABLE \`ctl_privilege\``);
        await queryRunner.query(`DROP TABLE \`ctl_role\``);
        await queryRunner.query(`DROP TABLE \`mnt_roles_privileges\``);
    }

}
