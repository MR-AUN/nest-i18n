import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/th')
  async getHello() {
    return this.appService.getHello()
  }

  @Get('/en')
  async getth() {
    return this.appService.getEN()
  }
}
