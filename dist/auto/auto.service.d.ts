import { Rent } from 'src/rent/rent.entity';
import { Repository } from 'typeorm';
import { Auto } from './auto.entity';
import { ChangeAutoDto } from './dto/change-auto.dto';
import { CreateAutoDto } from './dto/create-auto.dto';
export declare class AutoService {
    private autoRepository;
    private rentRepository;
    constructor(autoRepository: Repository<Auto>, rentRepository: Repository<Rent>);
    create(dto: CreateAutoDto): Promise<CreateAutoDto & Auto>;
    findAll(): Promise<Auto[]>;
    findOne(id: number): Promise<Auto>;
    update(id: number, dto: ChangeAutoDto): Promise<Auto>;
    remove(id: number): Promise<void>;
    findOneStat(id: number): Promise<{
        autoId: number;
        stat: number;
    }>;
    findAllStat(): Promise<{
        stat: number;
    }>;
}
