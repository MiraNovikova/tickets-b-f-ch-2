import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OdrerDto } from 'src/dto/order-dto';
import { IOrder } from 'src/interfaces/order';
//import { User, UserDocument } from 'src/shemas/customer';
import { Order, OrderDocument } from 'src/shemas/order';
//import { Tour, TourDocument } from 'src/shemas/tours';

@Injectable()
export class OrderService {
   constructor (@InjectModel(Order.name) private orderModel: Model<OrderDocument>,
   //@InjectModel(Tour.name) private tourModel: Model<TourDocument>,
   //@InjectModel(User.name) private userModel: Model<UserDocument>
) {}

   async sendOrder(data: OdrerDto): Promise<Order> {
    const orderData = new this.orderModel(data);
    return orderData.save()
   }

   async getListOrder(): Promise<IOrder[]> {

      return this.orderModel.find()

      //const orders = await this.orderModel.find();
      //const tours = await this.tourModel.find();
      //const users = await this.userModel.find();

      //return {orders, tours, users}
  }

 
}
