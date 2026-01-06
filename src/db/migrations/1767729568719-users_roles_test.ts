import { MigrationInterface, QueryRunner } from "typeorm";

export class UsersRolesTest1767729568719 implements MigrationInterface {
    name = 'UsersRolesTest1767729568719'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`firstName\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`middleName\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`lastName\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`secondLastName\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`first_name\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`middle_name\` varchar(50) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`last_name\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`seccond_last_name\` varchar(50) NULL`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` DROP FOREIGN KEY \`FK_6fc84ea008dd1a0578fbe4a3864\``);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` DROP FOREIGN KEY \`FK_753a32c59a584e1bfc5c0539769\``);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` CHANGE \`roleId\` \`roleId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` CHANGE \`privilegeId\` \`privilegeId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_users\` DROP FOREIGN KEY \`FK_2cce04a318549e694ea722d3f06\``);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_users\` DROP FOREIGN KEY \`FK_8a430db391ba3dbaf5116b341aa\``);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_users\` CHANGE \`roleId\` \`roleId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_users\` CHANGE \`userId\` \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` ADD CONSTRAINT \`FK_6fc84ea008dd1a0578fbe4a3864\` FOREIGN KEY (\`roleId\`) REFERENCES \`ctl_role\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` ADD CONSTRAINT \`FK_753a32c59a584e1bfc5c0539769\` FOREIGN KEY (\`privilegeId\`) REFERENCES \`ctl_privilege\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_users\` ADD CONSTRAINT \`FK_2cce04a318549e694ea722d3f06\` FOREIGN KEY (\`roleId\`) REFERENCES \`ctl_role\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_users\` ADD CONSTRAINT \`FK_8a430db391ba3dbaf5116b341aa\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`mnt_roles_users\` DROP FOREIGN KEY \`FK_8a430db391ba3dbaf5116b341aa\``);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_users\` DROP FOREIGN KEY \`FK_2cce04a318549e694ea722d3f06\``);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` DROP FOREIGN KEY \`FK_753a32c59a584e1bfc5c0539769\``);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` DROP FOREIGN KEY \`FK_6fc84ea008dd1a0578fbe4a3864\``);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_users\` CHANGE \`userId\` \`userId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_users\` CHANGE \`roleId\` \`roleId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_users\` ADD CONSTRAINT \`FK_8a430db391ba3dbaf5116b341aa\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_users\` ADD CONSTRAINT \`FK_2cce04a318549e694ea722d3f06\` FOREIGN KEY (\`roleId\`) REFERENCES \`ctl_role\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` CHANGE \`privilegeId\` \`privilegeId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` CHANGE \`roleId\` \`roleId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` ADD CONSTRAINT \`FK_753a32c59a584e1bfc5c0539769\` FOREIGN KEY (\`privilegeId\`) REFERENCES \`ctl_privilege\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` ADD CONSTRAINT \`FK_6fc84ea008dd1a0578fbe4a3864\` FOREIGN KEY (\`roleId\`) REFERENCES \`ctl_role\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`seccond_last_name\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`last_name\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`middle_name\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`first_name\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`secondLastName\` varchar(50) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`lastName\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`middleName\` varchar(50) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`firstName\` varchar(50) NOT NULL`);
    }

}
