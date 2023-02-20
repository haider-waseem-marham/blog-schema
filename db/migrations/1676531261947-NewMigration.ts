import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1676531261947 implements MigrationInterface {
    name = 'NewMigration1676531261947'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE IF NOT EXISTS `users` (`user_id` int NOT NULL AUTO_INCREMENT,`username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,`email` varchar(255) NOT NULL,`password` varchar(255) NOT NULL,PRIMARY KEY (`user_id`) USING BTREE)");

        await queryRunner.query("CREATE TABLE IF NOT EXISTS `categories` (`category_id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL,`description` varchar(255) DEFAULT NULL,PRIMARY KEY (`category_id`) ) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci");
        
        await queryRunner.query("CREATE TABLE IF NOT EXISTS `posts` (`post_id` int NOT NULL AUTO_INCREMENT,`user_id` int NOT NULL,`category_id` int NOT NULL,`title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,`content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,`status` varchar(50) DEFAULT NULL,`title_slug` longtext,PRIMARY KEY (`post_id`) USING BTREE)");

        await queryRunner.query("CREATE TABLE IF NOT EXISTS `comments` (`id` int NOT NULL AUTO_INCREMENT,`post_id` int NOT NULL,`user_id` int NOT NULL,`content` varchar(255) NOT NULL,PRIMARY KEY (`id`) USING BTREE)");

        await queryRunner.query("CREATE TABLE IF NOT EXISTS `media` (`media_id` int NOT NULL AUTO_INCREMENT,`post_id` int DEFAULT NULL,`media_type` blob,`file_path` varchar(250) DEFAULT NULL,`file_name` varchar(250) DEFAULT NULL,PRIMARY KEY (`media_id`) USING BTREE)");

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP users;`);
        await queryRunner.query(`DROP posts;`);
        await queryRunner.query(`DROP comments;`);
        await queryRunner.query(`DROP media;`)
        await queryRunner.query(`DROP categories;`);

        
      ;
       
        
        

    }

}
