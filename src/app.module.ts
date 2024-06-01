import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './controllers/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ToursModule } from './controllers/travels/tours/tours.module';
import { OrderModule } from './controllers/order/order.module';
import { UserSchema } from './shemas/customer';



@Module({
  imports: [UsersModule, ToursModule, OrderModule, MongooseModule.forRoot('mongodb://localhost:27017/nest'),
  MongooseModule.forFeature([{ name: 'user', schema: UserSchema}]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
