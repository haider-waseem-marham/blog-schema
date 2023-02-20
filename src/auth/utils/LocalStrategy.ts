import { UnauthorizedException } from "@nestjs/common";
import { Inject, Injectable } from "@nestjs/common/decorators";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../services/auth/auth.service";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(@Inject('AUTH_SERVICE') private readonly authService: AuthService){
        super();
    }


    async validate(username: string , password : string){
  
     const user =   this.authService.validateUser(username, password);
      if(!user){
        throw new UnauthorizedException();
      }
    }
}