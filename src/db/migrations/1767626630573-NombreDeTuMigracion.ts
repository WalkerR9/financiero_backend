import { MigrationInterface, QueryRunner } from "typeorm";

export class NombreDeTuMigracion1767626630573 implements MigrationInterface {
    name = 'NombreDeTuMigracion1767626630573'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(50) NOT NULL, \`middleName\` varchar(50) NULL, \`lastName\` varchar(50) NOT NULL, \`secondLastName\` varchar(50) NULL, \`email\` varchar(100) NOT NULL, \`password\` varchar(255) NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
