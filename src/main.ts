import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { OAuth2Server } from 'oauth2-server';
import { OAuthHandler } from './oauth.handler';
import { ValidationPipe } from '@nestjs/common';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // let oauth = new OAuth2Server({
  //   model: new OAuthHandler(), // See https://github.com/oauthjs/node-oauth2-server for specification
  // });


  // app.useGlobalInterceptors()
  // app.use(oauth.authorize(app.getHttpServer().Request,app.getHttpServer().Response));

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
