import { Rent } from "src/rent/rent.entity";
export declare class User {
    id: number;
    login: string;
    password: string;
    rent: Rent[];
}
