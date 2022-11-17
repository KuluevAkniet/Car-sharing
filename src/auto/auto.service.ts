import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auto } from './auto.entity';
import { ChangeAutoDto } from './dto/change-auto.dto';
import { CreateAutoDto } from './dto/create-auto.dto';

@Injectable()
export class AutoService {

    constructor(@InjectRepository(Auto) private autoRepository : Repository<Auto>,){}

    async create(dto : CreateAutoDto){
        return this.autoRepository.save(dto)
    }

    async findAll(): Promise<Auto[]>{
        const auto = await this.autoRepository.find();
        return auto;
    }

    async findOne(id: number): Promise<Auto>{
        const auto = await this.autoRepository.findOneBy({id}); 
        return auto;
    }

    async update(id: number, dto : ChangeAutoDto): Promise<Auto>{
        const loadAuto = await this.autoRepository.findOneBy({id});
        Object.assign(loadAuto, dto);

        return await this.autoRepository.save(loadAuto);
    }
    async remove(id: number): Promise<void>{
        await this.autoRepository.delete({id});
    }
}
