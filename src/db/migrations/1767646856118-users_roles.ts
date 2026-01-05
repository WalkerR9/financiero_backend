import { MigrationInterface, QueryRunner } from "typeorm";

export class UsersRoles1767646856118 implements MigrationInterface {
    name = 'UsersRoles1767646856118'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(50) NOT NULL, \`middleName\` varchar(50) NULL, \`lastName\` varchar(50) NOT NULL, \`secondLastName\` varchar(50) NULL, \`email\` varchar(100) NOT NULL, \`password\` varchar(255) NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`mnt_roles_users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`roleId\` int NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` DROP FOREIGN KEY \`FK_6fc84ea008dd1a0578fbe4a3864\``);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` DROP FOREIGN KEY \`FK_753a32c59a584e1bfc5c0539769\``);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` CHANGE \`roleId\` \`roleId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` CHANGE \`privilegeId\` \`privilegeId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_users\` ADD CONSTRAINT \`FK_2cce04a318549e694ea722d3f06\` FOREIGN KEY (\`roleId\`) REFERENCES \`ctl_role\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_users\` ADD CONSTRAINT \`FK_8a430db391ba3dbaf5116b341aa\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` ADD CONSTRAINT \`FK_6fc84ea008dd1a0578fbe4a3864\` FOREIGN KEY (\`roleId\`) REFERENCES \`ctl_role\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` ADD CONSTRAINT \`FK_753a32c59a584e1bfc5c0539769\` FOREIGN KEY (\`privilegeId\`) REFERENCES \`ctl_privilege\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` DROP FOREIGN KEY \`FK_753a32c59a584e1bfc5c0539769\``);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` DROP FOREIGN KEY \`FK_6fc84ea008dd1a0578fbe4a3864\``);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_users\` DROP FOREIGN KEY \`FK_8a430db391ba3dbaf5116b341aa\``);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_users\` DROP FOREIGN KEY \`FK_2cce04a318549e694ea722d3f06\``);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` CHANGE \`privilegeId\` \`privilegeId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` CHANGE \`roleId\` \`roleId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` ADD CONSTRAINT \`FK_753a32c59a584e1bfc5c0539769\` FOREIGN KEY (\`privilegeId\`) REFERENCES \`ctl_privilege\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` ADD CONSTRAINT \`FK_6fc84ea008dd1a0578fbe4a3864\` FOREIGN KEY (\`roleId\`) REFERENCES \`ctl_role\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`DROP TABLE \`mnt_roles_users\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
