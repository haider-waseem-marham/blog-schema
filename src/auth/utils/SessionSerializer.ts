import { Inject } from "@nestjs/common/decorators/core/inject.decorator";
import { PassportSerializer } from "@nestjs/passport";
import { Users } from "src/typeorm/user.entities";
import { UsersService } from "src/users/services/users/users.service";
export class SessionSerializer extends PassportSerializer{
    constructor(
        @Inject('USER_SERVICE') private readonly userService: UsersService, 
    ){
        super();
    }

    serializeUser(user: Users, done:(err,user:Users)=> void) {
        done(null,user);
    }
    
   async deserializeUser(user: Users, done:(err,user: Users) => void ){
     const userDB = await this.userService.findUserByID(user.id);
     return userDB ? done(null, userDB) : done(null,null);
   }   
        
    
}

