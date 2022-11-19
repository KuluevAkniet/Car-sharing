import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rent } from 'src/rent/rent.entity';
import { AutoController, AutoStatController } from './auto.controller';
import { Auto } from './auto.entity';
import { AutoService } from './auto.service';

@Module({
  controllers: [AutoController, AutoStatController],
  providers: [AutoService],
  imports: [
    TypeOrmModule.forFeature([Auto, Rent])
  ],
  exports: [TypeOrmModule]
})
export class AutoModule {}
