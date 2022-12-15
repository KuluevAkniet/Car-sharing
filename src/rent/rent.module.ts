import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Auto } from 'src/auto/auto.entity';
import { RentController } from './rent.controller';
import { Rent } from './rent.entity';
import { RentService } from './rent.service';

@Module({
  controllers: [RentController],
  providers: [RentService],
  imports: [TypeOrmModule.forFeature([Rent, Auto]), AuthModule],
  exports: [TypeOrmModule]
})
export class RentModule {}
