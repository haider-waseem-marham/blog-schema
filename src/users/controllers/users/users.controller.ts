import { Controller, Param , Get ,Put, Inject, Post , Body, UsePipes,Render, ValidationPipe, Delete , Patch, Res } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';
import { UpdateUserDto } from 'src/users/dto/UpdateUserDto';


@Controller('users')
export class UsersController {

    constructor(@Inject('USER_SERVICE') private readonly userService: UsersService) {

    }

    @Get('')
    
    findAll(){
     return this.userService.findAll();
    }
  
    @Patch('update/:id')
    @UsePipes(ValidationPipe)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  
  }

    @Post('create')
    @UsePipes(ValidationPipe)
    creatUser(@Body() createUserDto: CreateUserDto){
        return this.userService.createUser(createUserDto);
    }

    @Delete('delete/:id')
    remove(@Param('id') id: string){
        return this.userService.remove(id);
    }  

    /*
    @Get(':id/posts')
    userPosts(@Param('id') id: string){
      return this.userService.userPosts(id);
    }
*/

    
}
