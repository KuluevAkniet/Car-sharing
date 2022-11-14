import { TypeOrmModule } from '@nestjs/typeorm'
import { DB_CONFIG } from './utils/db_config'
import { AutoModule } from './auto/auto.module'
import { Module } from '@nestjs/common'
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RentController } from './rent/rent.controller';
import { RentModule } from './rent/rent.module';
import { RateService } from './rate/rate.service';
import { RateModule } from './rate/rate.module';


@Module({
  imports: [TypeOrmModule.forRoot(DB_CONFIG), AutoModule, UserModule, AuthModule, RentModule, RateModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
