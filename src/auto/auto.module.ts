import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Rent } from 'src/rent/rent.entity';
import { AutoController, AutoStatController } from './auto.controller';
import { Auto } from './auto.entity';
import { AutoService } from './auto.service';

@Module({
  controllers: [AutoController, AutoStatController],
  providers: [AutoService],
  imports: [
    TypeOrmModule.forFeature([Auto, Rent]), AuthModule
  ],
  exports: [TypeOrmModule]
})
export class AutoModule {}
