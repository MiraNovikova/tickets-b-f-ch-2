import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor() {}


  @Get()
  getHello(): string {
    return 'hi data'
  }

  @Post()
  sendAll(): string {
    return 'post data'
  }

  @Put()
  update(): string {
    return 'update date'
  }

  @Delete()
  delete(): string {
    return 'delete data'
  }
}
