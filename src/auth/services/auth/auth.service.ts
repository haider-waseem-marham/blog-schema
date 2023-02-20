import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators';
import { UsersService } from 'src/users/services/users/users.service';

@Injectable()
export class AuthService {

    constructor(
        @Inject('USER_SERVICE') private readonly userService: UsersService
    ){}
    async validateUser(username: string ,passowrd : string){
     const userDB = await this.userService.findUserByUsername(username);
     if(userDB && userDB.password === passowrd) {
        console.log('User validation success');
        console.log(userDB);
        return userDB;
     }
     console.log('validation failed');
     return null;
    }
}
   