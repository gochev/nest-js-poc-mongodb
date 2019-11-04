import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {User} from './domain/user';
import {TypegooseModule} from 'nestjs-typegoose';

@Module({
  imports: [TypegooseModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
