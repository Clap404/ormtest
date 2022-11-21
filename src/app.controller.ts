import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {Product} from "./entity/Product";
import {OrderDto} from "./dto/OrderDto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/populate')
  async populate(): Promise<void> {
    return this.appService.populate();
  }

  @Post('/clean')
  async clean(): Promise<void> {
    return this.appService.clean();
  }

  @Post('/:userId/order')
  async order(@Param() userId: number, @Body() orderDto: OrderDto): Promise<void> {
    return this.appService.order(userId, orderDto);
  }
}
