import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import * as  bcrypt from 'bcryptjs';


@Injectable()
export class AuthService {

    constructor(private userService:UserService,
           private jwtService:JwtService){}

    async login(createUserDto:CreateUserDto){
    
    }


    async regis(createUserDto:CreateUserDto){
        const candidate = await this.userService.getEmail(createUserDto.email);

        if(candidate){
             throw new HttpException('Такой пользователь уже имеется',HttpStatus.BAD_REQUEST)
        }
    }
    


}
