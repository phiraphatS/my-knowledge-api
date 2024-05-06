import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'x-recaptcha-token'],
    credentials: true, // Allow cookies
  });

  app.setGlobalPrefix('api');
  app.use(cookieParser());
  const port = process.env.PORT || 5001;
  await app.listen(port);
}
bootstrap();
