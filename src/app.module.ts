import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OAuthModule } from './oauth/oauth.module';

@Module({
  imports: [TypeOrmModule.forRoot(), OAuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
