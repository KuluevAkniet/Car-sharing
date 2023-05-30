import { CreateRentDto } from './dto/create-rent.dto';
import { RentService } from './rent.service';
export declare class RentController {
    private rentService;
    constructor(rentService: RentService);
    create(rentDto: CreateRentDto): Promise<CreateRentDto & import("./rent.entity").Rent>;
    getAllRents(): Promise<import("./rent.entity").Rent[]>;
    removeRent(id: number): Promise<void>;
    getAll(id: number): Promise<import("./rent.entity").Rent[]>;
}
