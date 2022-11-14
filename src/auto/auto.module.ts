import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutoController } from './auto.controller';
import { AutoService } from './auto.service';
import { Auto } from './entity.ts/auto.entity';
import { Autos_auto_rent } from './entity.ts/autos_auto_rent';


@Module({
    imports:[TypeOrmModule.forFeature([Auto])],
        controllers: [AutoController],
        providers: [AutoService]
})
export class AutoModule {}
