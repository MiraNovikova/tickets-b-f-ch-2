import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OdrerDto } from 'src/dto/order-dto';
import { IOrder } from 'src/interfaces/order';
import { OrderService } from 'src/services/order/order.service';
import { Order } from 'src/shemas/order';

@Controller('order-c')
export class OrderCController {
  constructor(private orderService: OrderService) { }

  @Post()
  initOrders(@Body() data: OdrerDto): void {
    const orderData = new OdrerDto(data.age, data.birthDay, data.cardNumber, data.tourId, data.userId);
    this.orderService.sendOrder(orderData)
  }

  @Get()
  getListOrder(): Promise<IOrder[]> {
    return this.orderService.getListOrder();
  }

  @Get()
  sendOrder(@Param('data') data): Promise<IOrder>{
      return this.orderService.sendOrder(data)
  }

 

}

