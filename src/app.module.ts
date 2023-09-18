import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot('mongodb://root:r@localhost:27017/cdnfm'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
