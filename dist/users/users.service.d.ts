import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getUserByLogin(login: string): Promise<User>;
    createUser(userDto: CreateUserDto): Promise<CreateUserDto & User>;
}
