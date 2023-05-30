import { Repository } from 'typeorm';
import { CreateRentDto } from './dto/create-rent.dto';
import { Rent } from './rent.entity';
export declare class RentService {
    private rentRepository;
    constructor(rentRepository: Repository<Rent>);
    create(dto: CreateRentDto): Promise<CreateRentDto & Rent>;
    findAll(): Promise<Rent[]>;
    findAllActive(id: number): Promise<Rent[]>;
    remove(id: number): Promise<void>;
    checkDate(startDay: Date, endDay: Date): number;
    rentCost(days: number, dto: CreateRentDto): void;
    rentCondition(array: any, day: Date): boolean;
    activeRent(array: any, date: any): any[];
}
