import { Controller, Patch,Inject,Delete,Param, Post, Get, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { CommentsService } from 'src/comments/services/comments/comments.service';
import { CreateCommentDto } from 'src/comments/dto/comment.dto';
import { UpdateCommentDto } from 'src/comments/dto/updateCommentDto';
@Controller('comments')
export class CommentsController {

   constructor(@Inject('COMMENT_SERVICE') private readonly commentService: CommentsService){

   }

   @Get('')
    
   findAll(){
    return this.commentService.findAll();
   }

   @Post('create')
   @UsePipes(ValidationPipe)
   creatComment(@Body() createCommentDto: CreateCommentDto){
  return this.commentService.createComment(createCommentDto);
   }

   @Delete('delete/:id')
   remove(@Param('id') id: string){
       return this.commentService.remove(id);
   }
   @Patch('update/:id')
   @UsePipes(ValidationPipe)
 update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
   return this.commentService.update(id, updateCommentDto);
 }

   @Get('post-comments')
   postComments(){
       return this.commentService.postComments();
   }

}
