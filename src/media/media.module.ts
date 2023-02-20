import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { MediaController } from './controllers/media/media.controller';
import { mediaService } from './services/media/media.service';
import { Media } from 'src/typeorm/media.entity';
import { MulterModule } from '@nestjs/platform-express';


@Module({
  imports: [TypeOrmModule.forFeature([Media]),
  MulterModule.register({
    dest: './media',}),
  ],
  controllers: [MediaController],
  providers: [
    {
    provide: 'MEDIA_SERVICE',
    useClass: mediaService,
    },
    
  ],
})
export class MediaModule {}
