/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { MenuModule } from './menu/menu.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true
}), ClientModule,
    MenuModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3306,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
