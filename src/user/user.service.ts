import {Injectable} from '@nestjs/common';
import {User} from './domain/user';
import {InjectModel} from 'nestjs-typegoose';
import {ReturnModelType} from '@typegoose/typegoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private readonly userModel: ReturnModelType<typeof User>) {
    }

    async createUser() {
        const user = new this.userModel();
        user.name = 'test nestjs2';
        return await user.save();
    }

    async createCustomUser(user: User) {
        const createdUser = new this.userModel(user);
        return await createdUser.save();
    }

    async listUsers(): Promise<User[] | null> {
        return await this.userModel.find().exec();
    }
}
