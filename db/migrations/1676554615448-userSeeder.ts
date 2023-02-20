import { MigrationInterface, QueryRunner } from "typeorm";

export class userSeeder1676554615448 implements MigrationInterface {
    name = 'userSeeder1676554615448'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query("INSERT INTO `users` (`user_id`,`username`,`email`,`password`) VALUES(1,'Haider','haider.wasim@gmail.com','haider.123'),(2,'mian faizan','mohammadfaiza.arain@gmail.com','faizan.123'),(3,'talha','talha.marham@gmail.com','talha.123'),(4,'Rayyan jafar','rayyan.jafar@gmail.com','rayyan.123'),(5,'Furqan','furqan.2@gmail.com','furqan.123'),(9,'Ahmad','ahmad123@gmail.com','ahmad.123'),")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
    }

}
