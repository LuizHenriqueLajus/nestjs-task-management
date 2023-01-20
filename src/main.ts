import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ forbidUnknownValues: false })); //need to resolve this, remember to delete "{ forbidUnknownValues: false }" later.
  await app.listen(3000);
}
bootstrap();
