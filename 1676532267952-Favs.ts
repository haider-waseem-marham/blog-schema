import { MigrationInterface, QueryRunner } from "typeorm";

export class Favs1676532267952 implements MigrationInterface {
    name = 'Favs1676532267952'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`media\` DROP FOREIGN KEY \`media_ibfk_1\``);
        await queryRunner.query(`ALTER TABLE \`posts\` DROP FOREIGN KEY \`posts_ibfk_1\``);
        await queryRunner.query(`ALTER TABLE \`posts\` DROP FOREIGN KEY \`posts_ibfk_2\``);
        await queryRunner.query(`DROP INDEX \`post_id\` ON \`media\``);
        await queryRunner.query(`DROP INDEX \`category_id\` ON \`posts\``);
        await queryRunner.query(`DROP INDEX \`user_id\` ON \`posts\``);
        await queryRunner.query(`ALTER TABLE \`media\` DROP COLUMN \`media_type\``);
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`title_slug\``);
        await queryRunner.query(`ALTER TABLE \`media\` ADD \`featured\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`comments\` ADD \`featured\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`categories\` CHANGE \`description\` \`description\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`media\` CHANGE \`post_id\` \`post_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`media\` DROP COLUMN \`file_path\``);
        await queryRunner.query(`ALTER TABLE \`media\` ADD \`file_path\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`media\` DROP COLUMN \`file_name\``);
        await queryRunner.query(`ALTER TABLE \`media\` ADD \`file_name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`title\``);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`title\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`content\``);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`content\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`status\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`status\` varchar(50) NULL`);
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`content\``);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`content\` longtext NULL`);
        await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`title\``);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`title\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`media\` DROP COLUMN \`file_name\``);
        await queryRunner.query(`ALTER TABLE \`media\` ADD \`file_name\` varchar(250) NULL`);
        await queryRunner.query(`ALTER TABLE \`media\` DROP COLUMN \`file_path\``);
        await queryRunner.query(`ALTER TABLE \`media\` ADD \`file_path\` varchar(250) NULL`);
        await queryRunner.query(`ALTER TABLE \`media\` CHANGE \`post_id\` \`post_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`categories\` CHANGE \`description\` \`description\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`comments\` DROP COLUMN \`featured\``);
        await queryRunner.query(`ALTER TABLE \`media\` DROP COLUMN \`featured\``);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD \`title_slug\` longtext NULL`);
        await queryRunner.query(`ALTER TABLE \`media\` ADD \`media_type\` blob NULL`);
        await queryRunner.query(`CREATE INDEX \`user_id\` ON \`posts\` (\`user_id\`)`);
        await queryRunner.query(`CREATE INDEX \`category_id\` ON \`posts\` (\`category_id\`)`);
        await queryRunner.query(`CREATE INDEX \`post_id\` ON \`media\` (\`post_id\`)`);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD CONSTRAINT \`posts_ibfk_2\` FOREIGN KEY (\`category_id\`) REFERENCES \`categories\`(\`category_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`posts\` ADD CONSTRAINT \`posts_ibfk_1\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`media\` ADD CONSTRAINT \`media_ibfk_1\` FOREIGN KEY (\`post_id\`) REFERENCES \`posts\`(\`post_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
