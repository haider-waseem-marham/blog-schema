import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryDto } from 'src/categories/dto/category_dto';
import { UpdateCategoryDto } from 'src/categories/dto/update_category.dto';
import { Categories } from 'src/typeorm/categories.entities';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
    constructor(@InjectRepository(Categories) private readonly categoriesRepository: Repository<Categories>){
}

findAll(): Promise<Categories[]> {
    return this.categoriesRepository.find();
  }

   
  createcategory(categoryDto: CategoryDto){
    const Newcategory =  this.categoriesRepository.create(categoryDto);
    return this.categoriesRepository.save(Newcategory);
  }
     
  async remove(id: string): Promise<void> {
    await this.categoriesRepository.delete(id);
  }

  async update(id : string , updateCategoryDto: UpdateCategoryDto ){
    await this.categoriesRepository.update(id,updateCategoryDto);

  }
}

