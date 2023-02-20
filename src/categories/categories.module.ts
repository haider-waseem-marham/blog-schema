import { Module } from '@nestjs/common';
import { Categories } from 'src/typeorm/categories.entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesController } from './controllers/categories/categories.controller';
import { CategoriesService } from './services/categories/categories.service';

@Module({
  imports: [TypeOrmModule.forFeature([Categories])],
  controllers: [CategoriesController],
  providers: [
    {
    provide: 'CATEGORY_SERVICE',
    useClass: CategoriesService,
    },
  ],
})
export class CategoriesModule {}
