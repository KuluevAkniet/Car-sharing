import { Body, Controller, Post} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiOperation({summary:'Successfully login'})
  @ApiResponse({    
    status: 200, 
    description: 'Successfully login',
    type: String,})
  async login(@Body() createDto : CreateUserDto) {
    return this.authService.login(createDto);
  }

  @Post('reg')
  @ApiOperation({summary:'registration user'})
  @ApiResponse({    
      status: 200, 
      description: 'Successfully signup user',
      type: String,})
  async registration(@Body() createDto : CreateUserDto){
    return this.authService.registration(createDto);
  }

}