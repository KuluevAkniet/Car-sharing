import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutoController } from './auto.controller';
import { Auto } from './auto.entity';
import { AutoService } from './auto.service';

@Module({
  controllers: [AutoController],
  providers: [AutoService],
  imports: [
    TypeOrmModule.forFeature([Auto])
  ],
  exports: [TypeOrmModule]
})
export class AutoModule {}
