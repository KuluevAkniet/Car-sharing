import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User)
    private readonly repo: Repository<User>) {
}

   async create(createUserDto:CreateUserDto){
        return await this.repo.save(createUserDto);
    }

    async getEmail(email:string){
         const user = await this.repo.findOne({where:{email}});
         return user;
    }
}
