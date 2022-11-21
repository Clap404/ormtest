import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT ? Number.parseInt(process.env.POSTGRES_PORT) : undefined,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: ["dist/entity/*.js"],
      migrations: ["dist/migration/*.js"],
      synchronize: true,
      logging: "all",
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
