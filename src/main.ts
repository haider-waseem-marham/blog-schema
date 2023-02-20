import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as passport from 'passport';
import { join } from 'path';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('api');
  app.use(session({
    name: 'NEST_JS_SESSION_ID', 
    secret:'DDFSDFSRFFDFDFRFFRFDF',
    resave:false, 
    saveUninitialized: true,
    cookie :{
      maxAge:60000,
    }
  }))
  app.use(passport.initialize());
  app.useLogger(passport.session());

  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  await app.listen(3000);
}
bootstrap();
