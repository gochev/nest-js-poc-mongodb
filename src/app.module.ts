import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UserModule} from './user/user.module';
import {TypegooseModule} from 'nestjs-typegoose';

@Module({
    imports: [TypegooseModule.forRoot('mongodb://localhost:27017/nest'),
        UserModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
