import { Controller,Get,Post, Inject , UsePipes,ValidationPipe, Patch,Delete,Param,Body} from '@nestjs/common';
import { CategoryDto } from 'src/categories/dto/category_dto';
import { UpdateCategoryDto } from 'src/categories/dto/update_category.dto';
import { CategoriesService } from 'src/categories/services/categories/categories.service';

@Controller('category')
export class CategoriesController {

    constructor(@Inject('CATEGORY_SERVICE') private readonly categoriesService : CategoriesService){
}

@Get('')
    
    findAll(){
     return this.categoriesService.findAll();
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    create(@Body() categoryDto: CategoryDto){
        return this.categoriesService.createcategory(categoryDto);
    }

    @Delete('delete/:id')
    remove(@Param('id') id: string){
        return this.categoriesService.remove(id);
    }
    
    @Patch('update/:id')
    @UsePipes(ValidationPipe)
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesService.update(id, updateCategoryDto);
  
  }
}
