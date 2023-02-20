import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCommentDto } from 'src/comments/dto/comment.dto';
import { UpdateCommentDto } from 'src/comments/dto/updateCommentDto';
import { Comments } from 'src/typeorm/comments.entities';
import { Repository } from 'typeorm';

@Injectable()
export class CommentsService {
constructor(@InjectRepository(Comments) private readonly commentRepository : Repository<Comments> ){

}

findAll(): Promise<Comments[]> {
    return this.commentRepository.find();
  }
 

   createComment(createCommentDto: CreateCommentDto){
    const NewComment =  this.commentRepository.create(createCommentDto);
      return this.commentRepository.save(NewComment);
   }

   async remove(id: string): Promise<void> {
    await this.commentRepository.delete(id);

}
async update(id : string , updateCommentDto: UpdateCommentDto ){
  await this.commentRepository.update(id,updateCommentDto);

}

postComments(){
  return this.commentRepository.find({
   relations: {
       post_: true,
        
   },
})

}

}