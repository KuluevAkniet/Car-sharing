import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRentDto } from './dto/create-rent.dto';
import { Rent } from './rent.entity';

@Injectable()
export class RentService {
    constructor(@InjectRepository(Rent) private rentRepository : Repository<Rent>){}

    async create(dto : CreateRentDto){
        return await this.rentRepository.save(dto)
    }

    async findAll(): Promise<Rent[]>{
        const rent = await this.rentRepository.find();
        return rent;
    }
}
