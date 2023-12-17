import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    const a = 1;
    return { message: 'Hello API' };
  }
}
