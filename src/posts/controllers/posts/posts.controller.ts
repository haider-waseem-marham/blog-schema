import { Body, Controller,Delete, Param, Get, Inject, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Patch } from '@nestjs/common/decorators';
import { CreatePostDto } from 'src/posts/dto/CreatePost.dto';
import { UpdatePostDto } from 'src/posts/dto/UpdatePostDto';
import { PostsService } from 'src/posts/services/posts/posts.service';

@Controller('posts')
export class PostsController {
    constructor(@Inject('POST_SERVICE') private readonly postService: PostsService){}

    @Get('')
    findAll(){
     return this.postService.findAll();
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createPost(@Body()createPostDto : CreatePostDto){
        return this.postService.createPost(createPostDto);
    }

    @Delete('delete/:id')
    remove(@Param('id') id: string){
        return this.postService.remove(id);
    } 
    
    @Patch('update/:id')
    @UsePipes(ValidationPipe)
    update(@Param('id') id:string,@Body() updatePostDto : UpdatePostDto){
        return this.postService.update(id,updatePostDto)
    }

    @Get('user-posts')
    getPosts(){
        return this.postService.getPosts();
    }
    
    
    @Get('post-category')
    postCategory(){
        return this.postService.postCategory();
    }

    @Get('post-comments')
    postComments(){
        return this.postService.postComments();
    }     
    
}
