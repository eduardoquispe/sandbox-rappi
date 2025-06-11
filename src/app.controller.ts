import { Body, Controller, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('webhook')
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @Post('data')
  sandbox(@Body() body: Record<string, any>) {
    this.logger.log('get');

    this.logger.log({ body });

    return this.appService.getHello();
  }
}
