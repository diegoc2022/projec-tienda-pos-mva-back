import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const MODE_ENV = process.env.NODE_ENV || 'development';
  const PORT = 3008;
  const CORS_ORIGIN =
    MODE_ENV === 'production'
      ? [
        'https://autoserviciolaperlaverde.com',
        'https://variedadesmariangel.com',
        'https://minimercadocasablanca.com',
        'http://localhost:4200'
      ]
      : [
        'http://localhost:4200'
      ];

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.enableCors({
    origin: CORS_ORIGIN,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({

    }),
  );

  await app.listen(PORT, '0.0.0.0', () => {
    console.log(`Backend corriendo en HTTP en puerto ${PORT}`);
  });

}

bootstrap();


