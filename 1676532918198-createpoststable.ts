import { MigrationInterface, QueryRunner } from "typeorm";

export class createpoststable1676532918198 implements MigrationInterface {
    name = 'createpoststable1676532918198'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`media\` (\`media_id\` int NOT NULL AUTO_INCREMENT, \`post_id\` int NOT NULL, \`file_path\` varchar(255) NOT NULL, \`file_name\` varchar(255) NOT NULL, \`featured\` varchar(255) NOT NULL, PRIMARY KEY (\`media_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`posts\` (\`post_id\` int NOT NULL AUTO_INCREMENT, \`user_id\` int NOT NULL, \`category_id\` int NOT NULL, \`title\` varchar(255) NOT NULL, \`content\` varchar(255) NOT NULL, \`status\` varchar(255) NOT NULL, PRIMARY KEY (\`post_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`comments\` (\`id\` int NOT NULL AUTO_INCREMENT, \`post_id\` int NOT NULL, \`user_id\` int NOT NULL, \`content\` varchar(255) NOT NULL, \`featured\` tinyint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`user_id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, PRIMARY KEY (\`user_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`categories\` CHANGE \`description\` \`description\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`categories\` CHANGE \`description\` \`description\` varchar(255) NULL`);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`comments\``);
        await queryRunner.query(`DROP TABLE \`posts\``);
        await queryRunner.query(`DROP TABLE \`media\``);
    }

}
