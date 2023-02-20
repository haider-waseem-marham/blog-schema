import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import {Posts} from 'src/typeorm/post_entities';
import { MediaModule } from './media/media.module';
import { Media } from './typeorm/media.entity';
import { CategoriesModule } from './categories/categories.module';
import { Categories } from './typeorm/categories.entities';
import { dataSourceOption } from 'db/data-source';


@Module({
  imports: [UsersModule,PostsModule,CommentsModule,MediaModule,TypeOrmModule.forRoot(dataSourceOption), AuthModule,
  PassportModule.register({
    session: true,
  }),
  UsersModule,
  PostsModule,
  CommentsModule,
  MediaModule,
  CategoriesModule,
  
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
