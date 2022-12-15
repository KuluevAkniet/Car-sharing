import { Body, Controller, Post} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() createDto : CreateUserDto) {
    return this.authService.login(createDto);
  }

  @Post('reg')
  async registration(@Body() createDto : CreateUserDto){
    return this.authService.registration(createDto);
  }

}