import { Test, TestingModule } from '@nestjs/testing';
import { OrderCController } from './order-c.controller';

describe('OrderCController', () => {
  let controller: OrderCController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderCController],
    }).compile();

    controller = module.get<OrderCController>(OrderCController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
