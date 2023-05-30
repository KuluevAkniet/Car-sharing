import { AutoService } from './auto.service';
import { ChangeAutoDto } from './dto/change-auto.dto';
import { CreateAutoDto } from './dto/create-auto.dto';
export declare class AutoController {
    private autoService;
    constructor(autoService: AutoService);
    create(autoDto: CreateAutoDto): Promise<CreateAutoDto & import("./auto.entity").Auto>;
    getAll(): Promise<import("./auto.entity").Auto[]>;
    getOne(id: number): Promise<import("./auto.entity").Auto>;
    updateOne(id: number, autoDto: ChangeAutoDto): Promise<import("./auto.entity").Auto>;
    removeOne(id: number): Promise<void>;
}
export declare class AutoStatController {
    private autoService;
    constructor(autoService: AutoService);
    getAllCar(): Promise<{
        stat: number;
    }>;
    getOne(id: number): Promise<{
        autoId: number;
        stat: number;
    }>;
}
