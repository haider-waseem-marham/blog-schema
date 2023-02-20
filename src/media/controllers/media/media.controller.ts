import {
  Controller,
  Inject,
  Patch,
  Get,
  Delete,
  Param,
  UsePipes,
  ValidationPipe,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateMediaDto } from 'src/media/dto/media_dto';
import { mediaService } from 'src/media/services/media/media.service';
import { buffer } from 'stream/consumers';

@Controller('media')
export class MediaController {
  constructor(
    @Inject('MEDIA_SERVICE') private readonly mediaService: mediaService,
  ) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    const createMediaDto = new CreateMediaDto();
    createMediaDto.file_name = file.originalname;
    createMediaDto.file_path = file.path;

    return this.mediaService.uploadFile(createMediaDto);
  }
  @Patch('update/:id')
  @UseInterceptors(FileInterceptor('file'))
  update(@Param('id') id: string, @UploadedFile() file: Express.Multer.File) {
    const createMediaDto = new CreateMediaDto();
    createMediaDto.file_name = file.originalname;
    createMediaDto.file_path = file.path;

    return this.mediaService.update(id, createMediaDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.mediaService.remove(id);
  }

  @Get('')
  findAll() {
    return this.mediaService.findAll();
  }

  @Get('media-posts')
    getMedia(){
        return this.mediaService.getMedia();
    }
}
