import * as process from 'process';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start(): Promise<void> {
  const port: number = +process.env.PORT || 3001;
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Nest.js backend API')
    .setDescription('Documentation about how this api works')
    .setVersion('1.0.0')
    .addTag('irubyeye')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(port, () => console.log(`Server started on port ${port}`));
}
start();
