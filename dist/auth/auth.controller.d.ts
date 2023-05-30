import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(createDto: CreateUserDto): Promise<{
        token: string;
    }>;
    registration(createDto: CreateUserDto): Promise<{
        token: string;
    }>;
}
