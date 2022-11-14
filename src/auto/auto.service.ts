import { Injectable,BadRequestException, Param } from '@nestjs/common';
import { CreateAutoDto } from './dto/create-auto.dto';
import {InjectRepository} from "@nestjs/typeorm";
import { Auto } from './entity.ts/auto.entity';
import {Repository} from "typeorm";
import { UpdateAuto } from './dto/update-auto.dto';


@Injectable()
export class AutoService {
    constructor(@InjectRepository(Auto)
    private readonly repo: Repository<Auto>) {
}
     async create(createAutoDto: CreateAutoDto){
        
        return await this.repo.save(createAutoDto);
    }

    async Getcar(){
        return await this.repo.find()
    }

    async findOne(id:number){
        return await this.repo.findOne({where:{id:id}})
    }

    async Update(id:number, UpdateAuto:UpdateAuto){
      const auto = await this.repo.findOne({where:{id:id}});
      if(!auto)throw new BadRequestException();
      Object.assign(auto,UpdateAuto);
      return await  this.repo.save(auto)
    }


    async Delete(id:number){
        const auto = await this.repo.findOne({where:{id:id}});
        if(!auto)throw new BadRequestException();
        return await this.repo.remove(auto);
    }


       
    async GetId(){
    const total = this.repo.createQueryBuilder('auto')
    return await total.select("count(auto.number)", "sum")
                      .where("auto.id = :id", { id: 1 })
                      .getRawOne();
         
     }


}


