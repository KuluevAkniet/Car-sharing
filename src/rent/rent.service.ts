import { ConsoleLogger, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRentDto } from './dto/create-rent.dto';
import { tariffs } from './enum/enum';
import { Rent } from './rent.entity';

@Injectable()
export class RentService {
    constructor(@InjectRepository(Rent) private rentRepository : Repository<Rent>){}

    async create(dto : CreateRentDto){
        const days = this.checkDate(dto.startDay, dto.endDay);
        if(days !== 0 && dto.tariff <= 3){
            const tariff = tariffs[dto.tariff - 1]

            dto.cost = days * tariff.cost;
            dto.distance = days * tariff.distance;
            return await this.rentRepository.save(dto);
        }else{
            throw console.error('incorrect value');
        }
    }

    async findAll(): Promise<Rent[]>{
        const rent = await this.rentRepository.find();
        return rent;
    }

    async remove(id: number): Promise<void>{
        await this.rentRepository.delete({id});
    }

    checkDate(startDay : Date, endDay : Date) : number{

        const date1 : Date = new Date(startDay);
        const date2 : Date = new Date(endDay);
        
        const data = date2.getTime() - date1.getTime();

        const weekStart : number = date1.getDay();
        const weekEnd : number = date1.getDay();
        const days : number = Math.floor(data/1000/60/60/24);
        
        if(days <= 30 && days > 1 && weekStart < 5 && weekEnd < 5){
            return days;
        }else{
            throw console.error('incorrect value');
        }
    }
}
