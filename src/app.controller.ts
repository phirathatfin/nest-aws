import { Controller, Get } from '@nestjs/common';

const lastUpdate = new Date().toLocaleString('en-US', {
  timeZone: 'Asia/Bangkok',
});

@Controller({ path: '', version: '1' })
export class AppController {
  constructor() {}

  @Get()
  getHello() {
    return {
      message: 'Welcome to tempate service api',
      lastUpdate,
    };
  }

  @Get('health')
  getHealth() {
    return {
      message: 'App is running',
      lastUpdate,
    };
  }
}
