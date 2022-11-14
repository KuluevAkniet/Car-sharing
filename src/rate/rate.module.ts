import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rate } from './entity/rate.entity';
import { RateController } from './rate.controller';
import { RateService } from './rate.service';

@Module({
  imports:[TypeOrmModule.forFeature([Rate])],
  providers:[RateService],
  controllers: [RateController]
})
export class RateModule {}
