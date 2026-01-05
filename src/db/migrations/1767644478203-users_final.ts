import { MigrationInterface, QueryRunner } from "typeorm";

export class UsersFinal1767644478203 implements MigrationInterface {
    name = 'UsersFinal1767644478203'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ctl_privilege\` ADD \`description\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`middleName\` \`middleName\` varchar(50) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`secondLastName\` \`secondLastName\` varchar(50) NULL`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` DROP FOREIGN KEY \`FK_6fc84ea008dd1a0578fbe4a3864\``);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` DROP FOREIGN KEY \`FK_753a32c59a584e1bfc5c0539769\``);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` CHANGE \`roleId\` \`roleId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` CHANGE \`privilegeId\` \`privilegeId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` ADD CONSTRAINT \`FK_6fc84ea008dd1a0578fbe4a3864\` FOREIGN KEY (\`roleId\`) REFERENCES \`ctl_role\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` ADD CONSTRAINT \`FK_753a32c59a584e1bfc5c0539769\` FOREIGN KEY (\`privilegeId\`) REFERENCES \`ctl_privilege\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` DROP FOREIGN KEY \`FK_753a32c59a584e1bfc5c0539769\``);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` DROP FOREIGN KEY \`FK_6fc84ea008dd1a0578fbe4a3864\``);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` CHANGE \`privilegeId\` \`privilegeId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` CHANGE \`roleId\` \`roleId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` ADD CONSTRAINT \`FK_753a32c59a584e1bfc5c0539769\` FOREIGN KEY (\`privilegeId\`) REFERENCES \`ctl_privilege\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_privileges\` ADD CONSTRAINT \`FK_6fc84ea008dd1a0578fbe4a3864\` FOREIGN KEY (\`roleId\`) REFERENCES \`ctl_role\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`secondLastName\` \`secondLastName\` varchar(50) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`middleName\` \`middleName\` varchar(50) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`ctl_privilege\` DROP COLUMN \`description\``);
    }

}
