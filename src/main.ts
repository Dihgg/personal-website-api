import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv'

async function bootstrap() {
  if (process.env.NODE_ENV != "production") {
    config();
  }
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
