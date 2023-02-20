import { Controller, Get , Header, Render, Res} from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
 
  @Header('Content-Type', 'text/html')
  getHello(): {name : string} {
    return {name: 'Haider'};
  }
}
