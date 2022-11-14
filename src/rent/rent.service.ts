import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rent } from './entity/rent.entity';

@Injectable()
export class RentService {

    constructor(@InjectRepository(Rent)
    private readonly repo: Repository<Rent>) {
}


   
    async GetId(){
         const total = this.repo.createQueryBuilder('rent')
          return await total.select("count(rent.autoId)", "sum")
                  .where("rent.id = :id", { id: 1 })
                  .getRawOne();
          
    }
}
