import { Injectable  } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
import { User } from 'src/users/types/User'; 
import {Users } from 'src/typeorm/user.entities';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import { UpdateUserDto } from 'src/users/dto/UpdateUserDto';
import { relative } from 'path';



@Injectable()
export class UsersService {

    constructor(@InjectRepository(Users) private readonly userRepository: Repository<Users>,) {

    }

    private users:User[] = [

        {
            username: 'haider',
            password: 'haider123'
        },
        
        {
            username: 'Rayyan',
            password: 'rayyan123'
        },
        
        {
            username: 'Rayyan',
            password: 'rayyan123'
        }
    ];

    findAll(): Promise<Users[]> {
        return this.userRepository.find();
      }

    getUsersById(username: string) {
        return this.users.find((user) => user.username === username);
    }

    async update(id : string , updateUserDto: UpdateUserDto ){
      await this.userRepository.update(id,updateUserDto);
  
    }

    
    createUser(createUserDto: CreateUserDto){
      const NewUser =  this.userRepository.create(createUserDto);
      return this.userRepository.save(NewUser);
    }

    
  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
     findUserByUsername(username : string){
       
        return this.userRepository.findOneBy({username});
}
     findUserByID(id:number){
        return this.userRepository.findOneBy({id});
     }

/*     userPosts(id:string){
        this.userRepository.find({
          relations: {
            user_id: true,
        },
        where: {
            user_id: {
               user_id:id,
            },
        },
    })
    console.log(id);

     }
  */ 
}
