import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post('/login')
  login(@Body() body: { username: string; password: string }, @Req() request: Request, @Res() response: Response) {
    const result = this.appService.login(body.username, body.password);
    response.sendStatus(200);
  }
}
