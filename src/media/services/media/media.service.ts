import { Injectable ,Res} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Media } from 'src/typeorm/media.entity';
import { CreateMediaDto } from 'src/media/dto/media_dto';
import { UpdateMediaDto } from 'src/media/dto/updateMedia.dto';


@Injectable()
export class mediaService {
    constructor(@InjectRepository(Media) private readonly mediaRepository: Repository<Media>,){
    }

    findAll(): Promise<Media[]> {
        return this.mediaRepository.find();
      }

     uploadFile(createMediaDto:CreateMediaDto){
     return this.mediaRepository.save(createMediaDto);
    //return this.mediaRepository.save(newMedia);     
}
async update(id : string ,updateMediaDto:UpdateMediaDto){
    await this.mediaRepository.update(id,updateMediaDto);

  }

async remove(id: string): Promise<void> {
    await this.mediaRepository.delete(id);
}

getMedia(){
  return this.mediaRepository.find({
   relations: {
       post_: true,
        
   },
})

} 
}