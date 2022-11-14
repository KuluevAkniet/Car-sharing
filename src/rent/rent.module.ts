import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rent } from './entity/rent.entity';
import { RentController } from './rent.controller';
import { RentService } from './rent.service';

@Module({
  imports:[TypeOrmModule.forFeature([Rent])],
  controllers: [RentController],
  providers: [RentService]
})
export class RentModule {}
