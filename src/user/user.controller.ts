import { Body, Controller, Post, UsePipes,ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@ApiTags('Registered')
@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}
    
    @Post('create')
    @UsePipes(new ValidationPipe({transform:true}))
     async create(@Body() createUserDto:CreateUserDto){
        return  await this.userService.create(createUserDto)
     }



   
}

