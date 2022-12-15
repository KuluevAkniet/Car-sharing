import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository : Repository<User>){}
    
    async getUserByLogin(login : string){
        const user = await this.userRepository.findOne({where: {login}});
        return user;
    }

    async createUser(userDto : CreateUserDto){
        
        return this.userRepository.save(userDto);
    }
}
