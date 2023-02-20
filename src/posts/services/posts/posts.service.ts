import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from 'src/posts/dto/CreatePost.dto';
import { Posts } from 'src/typeorm/post_entities';
import { UpdatePostDto } from 'src/posts/dto/UpdatePostDto';

@Injectable()
export class PostsService {
     
constructor(@InjectRepository(Posts) private readonly postRepository : Repository<Posts>,){

}

findAll(): Promise<Posts[]> {
    return this.postRepository.find();
  }

createPost(createPostDto : CreatePostDto){
    const NewPost = this.postRepository.create(createPostDto);
    return this.postRepository.save(NewPost);
}
async remove(id: string): Promise<void> {
    await this.postRepository.delete(id);
}
async update(id : string , updatePostDto:UpdatePostDto ){
    await this.postRepository.update(id,updatePostDto);

  }

  getPosts(){
     return this.postRepository.find({
      relations: {
          user_: true,
           
      },
  })
  }
  postCategory(){
    return this.postRepository.find({
     relations: {
         category_: true,
          
     },
 })
 }

 postComments(){
    return this.postRepository.find({
        relations:{
            comment:true,
        }
    })

 }
}