import { Controller, Post,Body, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { AuthService } from './auth.service';


@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {


     constructor( private authService:AuthService){}

      @Post('login')
      login(@Body() createUserDto:CreateUserDto){
           return this.authService.login(createUserDto)
      }

      @Post('regis')
      regis(@Body() createUserDto:CreateUserDto){
          return this.authService.regis(createUserDto)
      }
      
 
}
