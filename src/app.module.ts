import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auto } from "./auto/auto.entity";
import { AutoModule } from "./auto/auto.module";
import { Rent } from "./rent/rent.entity";
import { RentModule } from "./rent/rent.module";
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from "./users/user.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
        envFilePath: '.env'
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [Auto, Rent, User],
      synchronize: true,
  
    }),

    AutoModule,
    RentModule,
    AuthModule,
    UsersModule
  ],
})

export class AppModule{}