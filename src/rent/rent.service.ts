import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThanOrEqual, MoreThan, Repository } from 'typeorm';
import { CreateRentDto } from './dto/create-rent.dto';
import { tariffs } from './enum/enum';
import { Rent } from './rent.entity';

@Injectable()
export class RentService {
    constructor(@InjectRepository(Rent) private rentRepository : Repository<Rent>){}

    async create(dto : CreateRentDto){
    
        const allCar = await this.rentRepository.find({
            where : {
                autoId : dto.autoId
            }
        });

        if(dto.tariff > 3 || dto.tariff < 0){
            throw console.log('incorrect value of tariff');
        }

        if(this.rentCondition(allCar, dto.startDay)){
            const days = this.checkDate(dto.startDay, dto.endDay);
            if(days <= 30 && days > 1){
                this.rentCost(days, dto);
                return await this.rentRepository.save(dto);
            }else{
                throw console.error('incorrect value');
            }
        }else{
            throw console.error('condition failure')
        }
    }

    async findAll(): Promise<Rent[]>{
        const rent = await this.rentRepository.find();
        return rent;
    }

    async findAllActive(id : number) : Promise<Rent[]>{

        const today = new Date;

        const allCar = await this.rentRepository.find({
            where :{
                autoId : id,
            },
            order : {
                startDay : "ASC"
            }
        });
        const rent = this.activeRent(allCar, today);

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

        if(weekEnd < 5 && weekStart < 5){
            const days : number = Math.floor(data/1000/60/60/24);
            return days;
        }else{
            throw console.error('Today is day off');
        }
    }

    rentCost(days : number, dto : CreateRentDto){
        const tariff = tariffs[dto.tariff - 1];

            dto.distance = days * tariff.distance;
            dto.cost = days * tariff.cost;

            if(days >= 3 && days <= 5){
                dto.cost = Math.floor(dto.cost - ((dto.cost / 100)* 5));
            }

            if(days >= 6 && days <= 14){
                dto.cost = Math.floor(dto.cost - ((dto.cost / 100)* 10));
            }

            if(days >= 15 && days <= 30){
                dto.cost = Math.floor(dto.cost - ((dto.cost / 100)* 5));
            }
    }

    rentCondition(array, day : Date) : boolean{
        for(let key of array){
            if(Math.abs(this.checkDate(key.startDay, day)) <= 3){
                return false;
            }
        }

        return true;
    }

    activeRent(array, date){
        const rent = [];

        for(let key of array){
            const dateStart : Date = new Date(key.startDay);
            const dateEnd : Date = new Date(key.endDay);

            if(dateStart <= date && dateEnd > date){
                rent.push(key);
            }

        }

        return rent;
    }
}
