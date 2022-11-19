import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rent } from 'src/rent/rent.entity';
import { Repository } from 'typeorm';
import { Auto } from './auto.entity';
import { ChangeAutoDto } from './dto/change-auto.dto';
import { CreateAutoDto } from './dto/create-auto.dto';

@Injectable()
export class AutoService {

    constructor(@InjectRepository(Auto) private autoRepository : Repository<Auto>, 
    @InjectRepository(Rent) private rentRepository : Repository<Rent>){}

    async create(dto : CreateAutoDto){
        return this.autoRepository.save(dto)
    }

    async findAll(): Promise<Auto[]>{
        const auto = await this.autoRepository.find();
        const rent = await this.rentRepository.find();
        let stat : number = 0;

        for(let key of rent){
            stat += key.distance;
        }

        console.log(stat)

        return auto;
    }

    async findOne(id: number): Promise<Auto>{
        const auto = await this.autoRepository.findOneBy({id}); 
        const rent = await this.rentRepository.find({
            where : {
                autoId : id
            }
        })
        let stat : number = 0;

        for(let key of rent){
            stat += key.distance;
        }

        console.log(stat)

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
