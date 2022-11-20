import { IsDate, IsNotEmpty, IsNumber } from "class-validator";

export class CreateRentDto{

    @IsNotEmpty()
    @IsNumber()
    readonly autoId : number;

    @IsNotEmpty()
    @IsNumber()
    readonly tariff : number;

    @IsNotEmpty()
    @IsDate()
    readonly startDay: Date;

    @IsNotEmpty()
    @IsDate()
    readonly endDay: Date;

    @IsNumber()
    cost? : number;

    @IsNumber()
    distance? : number;

    
}