import { Auto } from 'src/auto/auto.entity';
import { User } from 'src/users/user.entity';
export declare class Rent {
    id: number;
    autos: Auto;
    autoId: number;
    tariff: number;
    startDay: Date;
    endDay: Date;
    cost: number;
    distance: number;
    users: User;
    userId: number;
}
