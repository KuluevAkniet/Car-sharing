import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import {JwtService} from '@nestjs/jwt'
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/user.entity';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService, private jwtService : JwtService) {}

  async login(userDto: CreateUserDto){
    const user = await this.validateUser(userDto);
    return user;
}

async registration(userDto: CreateUserDto){
    const candidate = await this.userService.getUserByLogin(userDto.login)
    if(candidate){
        throw new HttpException('User with same login already exist', HttpStatus.BAD_REQUEST);
    }


    const user = await this.userService.createUser({...userDto});

    return this.generateToken(user);
}

async generateToken(user : User){

    const payload = {login : user.login, id : user.id}

    return {
        token: this.jwtService.sign(payload)
    }
}

private async validateUser(userDto : CreateUserDto){
    const user = await this.userService.getUserByLogin(userDto.login);
    const passwordEqual = user.password == userDto.password ? true : false;

    if(user && passwordEqual){
        return this.generateToken(user);
    }

    throw new UnauthorizedException("Password or login is not correct");
}
}
