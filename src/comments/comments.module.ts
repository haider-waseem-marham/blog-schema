import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comments } from 'src/typeorm/comments.entities';
import { CommentsController } from './controllers/comments/comments.controller';
import { CommentsService } from './services/comments/comments.service';

@Module({
  imports: [TypeOrmModule.forFeature([Comments])],
  controllers: [CommentsController],
  providers: [
    {
    provide: 'COMMENT_SERVICE',
    useClass: CommentsService,
    },
  ],
})
export class CommentsModule {}
