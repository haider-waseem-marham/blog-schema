import { Controller, Post, Request, } from '@nestjs/common';
import { Get, Session, UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { LocalAuthGuard } from 'src/auth/utils/LocalGuard';

@Controller('auth')
export class AuthController {

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req){

    }

    @Get('')
    async getAuthSession(
     @Session() session:Record<string, any>){
      console.log(session);
      console.log(session.id);
      session.authenticated = true;
      return session;
     }
    

    }

