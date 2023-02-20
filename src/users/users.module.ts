import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import {Users} from 'src/typeorm/user.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [
    {
    provide: 'USER_SERVICE',
    useClass: UsersService,
    },
  ],
})
export class UsersModule {}
