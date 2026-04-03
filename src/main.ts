import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  // Detecta el entorno: 'production' o 'development'
  const MODE_ENV = process.env.NODE_ENV || 'development';

  const PORT = 3008;

  // CORS según entorno
  const CORS_ORIGIN =
    MODE_ENV === 'production'
      ? [
        'https://variedadesmariangel.com',
        'http://108.181.191.228:4203',
        'http://localhost:3008',
        'http://localhost:4200'
      ]
      : [
        'http://localhost:4200',
        'http://localhost:3008'
      ];

  // Crea la aplicación NestJS
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // Body parser y validaciones
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  //app.setGlobalPrefix('api');
  app.enableCors({
    origin: CORS_ORIGIN,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT, '0.0.0.0', () => {
    console.log(`Backend corriendo en HTTP en puerto ${PORT}`);
  });

}

bootstrap();


