import { Injectable } from '@nestjs/common';
import Client from './searchImg/ali';

@Injectable()
export class AppService {
  async searchImg(body: any) {
    console.log(body);
    const result = await Client.main(body.imgUrl);
    return result;
  }
}
