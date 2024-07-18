import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // 启用默认的 CORS 设置
  await app.listen(3000);
}
bootstrap();
