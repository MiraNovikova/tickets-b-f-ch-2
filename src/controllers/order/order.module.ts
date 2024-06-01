import { Module } from '@nestjs/common';
import { OrderCController } from './order-c/order-c.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from 'src/shemas/order';
import { OrderService } from 'src/services/order/order.service';
//import { PassportModule } from '@nestjs/passport';
//import { JwtModule } from '@nestjs/jwt';
//import { jwtConstants } from 'src/static/private/constants';
//import { JwtStrategyService } from 'src/services/Authentication/jwt-strategy/jwt-strategy.service';


@Module({
  imports: [MongooseModule.forFeature([{name: Order.name, schema: OrderSchema}]),
 // PassportModule,
  //JwtModule.register({
  //    secret: jwtConstants.secret
  //})
],
  controllers: [OrderCController],
  providers: [OrderService]
})
export class OrderModule {}


