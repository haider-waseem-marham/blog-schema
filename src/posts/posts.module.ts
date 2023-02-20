import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsController } from './controllers/posts/posts.controller';
import { PostsService } from './services/posts/posts.service';
import {Posts} from 'src/typeorm/post_entities';

@Module({
  imports: [TypeOrmModule.forFeature([Posts])],
  controllers: [PostsController],
  providers: [
    {
    provide: 'POST_SERVICE',
    useClass: PostsService,
    },
  ],
})
export class PostsModule {}
