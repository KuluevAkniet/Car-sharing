import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auto } from "./auto/auto.entity";
import { AutoModule } from "./auto/auto.module";
import { Rent } from "./rent/rent.entity";
import { RentModule } from "./rent/rent.module";

@Module({
  imports: [
    ConfigModule.forRoot({
        envFilePath: '.env'
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Auto, Rent],
      synchronize: true,
  
    }),

    AutoModule,
    RentModule
  ],
})

export class AppModule{}