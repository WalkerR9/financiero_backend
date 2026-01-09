import { MigrationInterface, QueryRunner } from "typeorm";

export class Jwt1767974553081 implements MigrationInterface {
    name = 'Jwt1767974553081'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`refresh_tokens\` (\`id\` int NOT NULL AUTO_INCREMENT, \`token\` varchar(255) NOT NULL, \`expires_at\` datetime NOT NULL, \`isRevoked\` tinyint NOT NULL DEFAULT 0, \`ip_address\` varchar(255) NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`middle_name\` \`middle_name\` varchar(50) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`seccond_last_name\` \`seccond_last_name\` varchar(50) NULL`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_users\` DROP FOREIGN KEY \`FK_2cce04a318549e694ea722d3f06\``);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_users\` DROP FOREIGN KEY \`FK_8a430db391ba3dbaf5116b341aa\``);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_users\` CHANGE \`roleId\` \`roleId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_users\` CHANGE \`userId\` \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`roles_privileges\` DROP FOREIGN KEY \`FK_8d45f032ccfee922de6539e5dca\``);
        await queryRunner.query(`ALTER TABLE \`roles_privileges\` DROP FOREIGN KEY \`FK_e217137eda82e7f16838862067d\``);
        await queryRunner.query(`ALTER TABLE \`roles_privileges\` CHANGE \`roleId\` \`roleId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`roles_privileges\` CHANGE \`privilegeId\` \`privilegeId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_users\` ADD CONSTRAINT \`FK_2cce04a318549e694ea722d3f06\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_users\` ADD CONSTRAINT \`FK_8a430db391ba3dbaf5116b341aa\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`roles_privileges\` ADD CONSTRAINT \`FK_8d45f032ccfee922de6539e5dca\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`roles_privileges\` ADD CONSTRAINT \`FK_e217137eda82e7f16838862067d\` FOREIGN KEY (\`privilegeId\`) REFERENCES \`privilege\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`refresh_tokens\` ADD CONSTRAINT \`FK_610102b60fea1455310ccd299de\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`refresh_tokens\` DROP FOREIGN KEY \`FK_610102b60fea1455310ccd299de\``);
        await queryRunner.query(`ALTER TABLE \`roles_privileges\` DROP FOREIGN KEY \`FK_e217137eda82e7f16838862067d\``);
        await queryRunner.query(`ALTER TABLE \`roles_privileges\` DROP FOREIGN KEY \`FK_8d45f032ccfee922de6539e5dca\``);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_users\` DROP FOREIGN KEY \`FK_8a430db391ba3dbaf5116b341aa\``);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_users\` DROP FOREIGN KEY \`FK_2cce04a318549e694ea722d3f06\``);
        await queryRunner.query(`ALTER TABLE \`roles_privileges\` CHANGE \`privilegeId\` \`privilegeId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`roles_privileges\` CHANGE \`roleId\` \`roleId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`roles_privileges\` ADD CONSTRAINT \`FK_e217137eda82e7f16838862067d\` FOREIGN KEY (\`privilegeId\`) REFERENCES \`privilege\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`roles_privileges\` ADD CONSTRAINT \`FK_8d45f032ccfee922de6539e5dca\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_users\` CHANGE \`userId\` \`userId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_users\` CHANGE \`roleId\` \`roleId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_users\` ADD CONSTRAINT \`FK_8a430db391ba3dbaf5116b341aa\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`mnt_roles_users\` ADD CONSTRAINT \`FK_2cce04a318549e694ea722d3f06\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`seccond_last_name\` \`seccond_last_name\` varchar(50) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`middle_name\` \`middle_name\` varchar(50) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`DROP TABLE \`refresh_tokens\``);
    }

}
